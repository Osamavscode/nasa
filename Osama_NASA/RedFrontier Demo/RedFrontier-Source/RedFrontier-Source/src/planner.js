// Route estimation — runs the same physics model along a planned path
import { height, terrainType } from './terrain.js';
import { MISSION } from './data.js';
import { resolve, drivePower, tractionState, maxSlopeDeg, heaterPower, solarPower, dustTau, wheelDamagePerM, capabilities, hasNeed, TASK_INFO, H2E, localHour, solOf, fmtHour } from './physics.js';

export function estimateRoute(design, waypoints) {
  const r = resolve(design);
  const caps = capabilities(design);
  const idleInstr = r.instruments.filter(i => i.id === 'rems' || i.id === 'rad').reduce((s, i) => s + i.power, 0);
  const idle = r.chassis.baseLoad + idleInstr;
  let hour = MISSION.startHour, battery = r.battery.capacity, minBattery = battery, dist = 0, damage = 0;
  const segs = [], problems = [];
  let blocked = 0, stuckAt = null, deadAt = null;
  const STEP = 4;
  const terrainDist = { bedrock: 0, gravel: 0, sand: 0, rocky: 0 };
  const visited = new Set();

  let nightMin = Infinity;
  const step = (dh, load) => {
    const gen = solarPower(r, hour, dustTau(hour)) + r.rtg.power;
    battery = Math.min(r.battery.capacity, battery + (gen - load) * dh * H2E);
    hour += dh;
    if (battery < minBattery) minBattery = battery;
    if (battery <= 0 && deadAt === null) deadAt = hour;
  };
  const sleepIfNeeded = () => {
    if (localHour(hour) < MISSION.endHour && localHour(hour) >= MISSION.startHour) return;
    const wake = (solOf(hour) - (localHour(hour) < MISSION.startHour ? 1 : 0)) * 24 + MISSION.startHour;
    while (hour < wake) { step(0.1, r.chassis.sleepLoad + heaterPower(r, hour)); nightMin = Math.min(nightMin, battery); }
  };
  const spend = (hours, extraLoad) => {
    const n = Math.max(1, Math.ceil(hours / 0.05));
    for (let i = 0; i < n; i++) { sleepIfNeeded(); step(hours / n, idle + heaterPower(r, hour) + extraLoad); }
  };

  for (let i = 0; i < waypoints.length - 1; i++) {
    const a = waypoints[i], b = waypoints[i + 1];
    const d = Math.hypot(b.x - a.x, b.z - a.z), n = Math.max(1, Math.ceil(d / STEP));
    const seg = { from: a, to: b, dist: d, maxSlope: 0, bad: false, samples: [] };
    for (let k = 0; k < n; k++) {
      const t0 = k / n, t1 = (k + 1) / n;
      const x0 = a.x + (b.x - a.x) * t0, z0 = a.z + (b.z - a.z) * t0;
      const x1 = a.x + (b.x - a.x) * t1, z1 = a.z + (b.z - a.z) * t1;
      const sd = d / n;
      const dh = height(x1, z1) - height(x0, z0);
      const slope = Math.atan2(dh, sd) * 180 / Math.PI;
      const ty = terrainType((x0 + x1) / 2, (z0 + z1) / 2);
      terrainDist[ty] += sd;
      const tr = tractionState(r, ty, slope);
      const lim = maxSlopeDeg(r, ty);
      const bad = slope > lim || tr.speedFrac <= 0.02;
      seg.samples.push({ x: x0, z: z0, x1, z1, bad, ty });
      if (bad) { seg.bad = true; blocked++; if (!stuckAt) stuckAt = { x: x0, z: z0, slope, ty, lim }; }
      seg.maxSlope = Math.max(seg.maxSlope, slope);
      const v = r.wheels.speed * Math.max(0.15, tr.speedFrac);
      const p = drivePower(design, r, ty, slope, v).total;
      spend(sd / v / MISSION.secPerHour, p);
      dist += sd; damage += wheelDamagePerM(design, r, ty) * sd;
    }
    segs.push(seg);
    // science stop at target?
    for (const tg of MISSION.targets) {
      if (!visited.has(tg.id) && Math.hypot(tg.x - b.x, tg.z - b.z) < 14) {
        visited.add(tg.id);
        for (const tk of tg.tasks) if (tk.needs.every(nd => hasNeed(caps, nd))) spend(TASK_INFO[tk.id].hours, TASK_INFO[tk.id].power);
      }
    }
  }
  if (blocked) problems.push(`${blocked * STEP} m of route too steep or soft for your wheels`);
  if (deadAt) problems.push(`Battery runs out on sol ${solOf(deadAt)} around ${fmtHour(deadAt)}`);
  const lastHour = MISSION.sols * 24 - 24 + MISSION.endHour;
  if (hour > lastHour) problems.push(`Route needs more than ${MISSION.sols} sols`);
  if (damage > 70) problems.push(`Wheel wear ${damage.toFixed(0)}% — risky`);
  return { segs, dist, endHour: hour, endSol: solOf(hour), nightMin, endBattery: battery, minBattery, capacity: r.battery.capacity, damage, problems, visited: [...visited], terrainDist, deadAt, stuckAt };
}

/** Greedy nearest-neighbour plan through all targets, detouring around steep cells */
export function autoPlan() {
  const start = { x: MISSION.landing.x, z: MISSION.landing.z };
  const left = [...MISSION.targets];
  const pts = [start];
  let cur = start;
  while (left.length) {
    left.sort((p, q) => Math.hypot(p.x - cur.x, p.z - cur.z) - Math.hypot(q.x - cur.x, q.z - cur.z));
    const nx = left.shift();
    pts.push({ x: nx.x, z: nx.z, target: nx.id });
    cur = nx;
  }
  return pts;
}
