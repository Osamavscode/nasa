// ============================================================================
//  TERRAIN — one analytic height/terrain function shared by the 3D world,
//  the 2D planning map and the physics model, so they always agree.
// ============================================================================
import { MISSION } from './data.js';

export const WORLD = { size: 1000, half: 500 };

// ---- seeded value noise -----------------------------------------------------
function hash(ix, iz, seed) {
  let h = ix * 374761393 + iz * 668265263 + seed * 2147483647;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return (h & 0xffffff) / 0xffffff;
}
const smooth = t => t * t * (3 - 2 * t);
export function noise(x, z, seed = 1) {
  const ix = Math.floor(x), iz = Math.floor(z);
  const fx = smooth(x - ix), fz = smooth(z - iz);
  const a = hash(ix, iz, seed), b = hash(ix + 1, iz, seed), c = hash(ix, iz + 1, seed), d = hash(ix + 1, iz + 1, seed);
  return (a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz) * 2 - 1;
}
export function fbm(x, z, oct = 4, seed = 1) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) { s += a * noise(x * f, z * f, seed + i * 17); n += a; a *= 0.5; f *= 2.03; }
  return s / n;
}
export function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// ---- features ---------------------------------------------------------------
const T = Object.fromEntries(MISSION.targets.map(t => [t.id, t]));
const gauss = (d2, w) => Math.exp(-d2 / (w * w));
const RIDGE = { x: T.T3.x, z: T.T3.z, ang: 0.55, len: 150, wid: 42, h: 20 };
const CRATER = { x: -265, z: -300, r: 112, rim: 34 };
const DUNES = { x: T.T2.x, z: T.T2.z, r: 115 };
const LAKE = { x: T.T1.x, z: T.T1.z, r: 75 };

export function duneMask(x, z) {
  const d2 = (x - DUNES.x) ** 2 + (z - DUNES.z) ** 2;
  return Math.max(0, gauss(d2, DUNES.r) * 1.25 + fbm(x / 60, z / 60, 2, 9) * 0.25);
}
function lakeMask(x, z) { const d = Math.hypot(x - LAKE.x, z - LAKE.z) * (1 + 0.35 * fbm(x / 40, z / 40, 2, 41)); return gauss(d * d, LAKE.r); }

export function height(x, z) {
  let h = fbm(x / 220, z / 220, 4, 3) * 9 + fbm(x / 55, z / 55, 3, 5) * 1.6 + fbm(x / 9, z / 9, 2, 7) * 0.18;
  // Vera Rubin–like ridge
  const c = Math.cos(RIDGE.ang), s = Math.sin(RIDGE.ang);
  const dx = x - RIDGE.x, dz = z - RIDGE.z;
  const u = dx * c + dz * s, v = -dx * s + dz * c;
  const along = Math.max(0, 1 - (u / RIDGE.len) ** 4);
  h += RIDGE.h * along * gauss(v * v, RIDGE.wid) * (0.85 + 0.15 * fbm(u / 30, 0, 2, 11));
  // crater rim (overlook)
  const dc = Math.hypot(x - CRATER.x, z - CRATER.z);
  h += CRATER.rim * gauss((dc - CRATER.r) ** 2, dc > CRATER.r ? 75 : 38) - 18 * Math.max(0, 1 - dc / CRATER.r) ** 1.5;
  // dunes: wind-aligned ridges, asymmetric profile
  const dm = Math.min(1, duneMask(x, z));
  if (dm > 0) {
    const w = x * 0.82 + z * 0.57 + fbm(x / 40, z / 40, 2, 13) * 18;
    const ph = (w / 26) % 1; const p = ph < 0 ? ph + 1 : ph;
    const prof = p < 0.62 ? p / 0.62 : (1 - p) / 0.38;          // gentle stoss, steeper lee
    h += dm * (prof * 2.4 + 1.0);
  }
  // lakebed: flatten
  const lm = lakeMask(x, z);
  h = h * (1 - lm * 0.85) + (-3) * lm * 0.85;
  // outer crater walls keep the rover inside
  const r = Math.max(Math.abs(x), Math.abs(z));
  if (r > 420) h += ((r - 420) / 80) ** 2 * 35;
  return h;
}

export function slopeAt(x, z) {
  const e = 1.5;
  const gx = (height(x + e, z) - height(x - e, z)) / (2 * e);
  const gz = (height(x, z + e) - height(x, z - e)) / (2 * e);
  return { gx, gz, deg: Math.atan(Math.hypot(gx, gz)) * 180 / Math.PI };
}

export function rockiness(x, z) {
  return fbm(x / 45 + 100, z / 45 - 50, 3, 21);
}
export function terrainType(x, z, slopeDeg) {
  const sd = slopeDeg ?? slopeAt(x, z).deg;
  if (duneMask(x, z) > 0.45) return 'sand';
  if (lakeMask(x, z) > 0.35) return 'bedrock';
  if (sd > 13) return 'bedrock';
  if (rockiness(x, z) > 0.3) return 'rocky';
  if (fbm(x / 70 - 30, z / 70 + 80, 2, 31) > 0.42) return 'sand';
  return 'gravel';
}

// ---- rocks ------------------------------------------------------------------
let _rocks = null;
export function rocks() {
  if (_rocks) return _rocks;
  const r = rng(1234), out = [];
  const avoid = [MISSION.landing, ...MISSION.targets];
  const clear = (x, z, d) => avoid.every(a => Math.hypot(a.x - x, a.z - z) > d);
  for (let i = 0; i < 9000 && out.length < 1700; i++) {
    const x = (r() - 0.5) * 860, z = (r() - 0.5) * 860;
    const ty = terrainType(x, z);
    const p = ty === 'rocky' ? 0.9 : ty === 'gravel' ? 0.18 : ty === 'bedrock' ? 0.12 : 0.02;
    if (r() > p) continue;
    const big = ty === 'rocky' ? r() < 0.16 : r() < 0.04;
    const size = big ? 0.9 + r() * 1.0 : 0.12 + r() * 0.35;
    if (big && !clear(x, z, 18)) continue;
    out.push({ x, z, size, big, rot: r() * 6.28, sq: 0.55 + r() * 0.4, seed: Math.floor(r() * 1000) });
  }
  _rocks = out;
  return out;
}
export const bigRocks = () => rocks().filter(r => r.big);
