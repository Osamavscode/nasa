// Renders the shaded-relief terrain map (shared by planning screen & minimap)
import { WORLD, height, terrainType, slopeAt } from './terrain.js';

const COL = {
  bedrock: [176, 128, 98], gravel: [150, 88, 56], sand: [196, 120, 64], rocky: [110, 72, 56],
};

/** Returns RGBA Uint8ClampedArray of size n×n covering the world */
export function renderMapPixels(n = 512) {
  const px = new Uint8ClampedArray(n * n * 4);
  const step = WORLD.size / n;
  const H = new Float32Array((n + 1) * (n + 1));
  for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++)
    H[j * (n + 1) + i] = height(-WORLD.half + i * step, -WORLD.half + j * step);
  let hmin = Infinity, hmax = -Infinity;
  for (const h of H) { if (h < hmin) hmin = h; if (h > hmax) hmax = h; }
  hmax = Math.min(hmax, 45);
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const x = -WORLD.half + (i + 0.5) * step, z = -WORLD.half + (j + 0.5) * step;
    const h00 = H[j * (n + 1) + i], h10 = H[j * (n + 1) + i + 1], h01 = H[(j + 1) * (n + 1) + i];
    const dx = (h10 - h00) / step, dz = (h01 - h00) / step;
    const slopeDeg = Math.atan(Math.hypot(dx, dz)) * 180 / Math.PI;
    const ty = terrainType(x, z, slopeDeg);
    // hillshade (light from NW)
    const nx = -dx, ny = 1, nz = -dz, l = Math.hypot(nx, ny, nz);
    const shade = Math.max(0, (nx * -0.6 + ny * 0.7 + nz * -0.4) / l) * 0.75 + 0.35;
    const elev = (h00 - hmin) / (hmax - hmin + 1e-6);
    const c = COL[ty];
    const k = shade * (0.8 + 0.35 * elev);
    const o = (j * n + i) * 4;
    px[o] = c[0] * k; px[o + 1] = c[1] * k; px[o + 2] = c[2] * k; px[o + 3] = 255;
    // contour lines every 5 m
    const band = Math.floor(h00 / 5), band2 = Math.floor(h10 / 5), band3 = Math.floor(h01 / 5);
    if (band !== band2 || band !== band3) { px[o] *= 0.78; px[o + 1] *= 0.78; px[o + 2] *= 0.78; }
  }
  return px;
}

export function worldToMap(x, z, n) { return [(x + WORLD.half) / WORLD.size * n, (z + WORLD.half) / WORLD.size * n]; }
export function mapToWorld(u, v, n) { return [u / n * WORLD.size - WORLD.half, v / n * WORLD.size - WORLD.half]; }
export { slopeAt };
