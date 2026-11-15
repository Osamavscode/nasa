// ============================================================================
//  PHYSICS & ENGINEERING MODEL
//  Every number the player sees comes from these equations.
// ============================================================================
import { MARS, CATALOG, TERRAIN, MISSION, BUDGET_M } from './data.js';

export const PANEL_EFF = 0.20;   // cell efficiency × packing × temperature × deposited dust
export const DRIVE_EFF = 0.50;   // motor + gearbox efficiency
export const TILT_LIMIT_DEG = 30;
export const WEB_MIN_C = -40;    // warm electronics box minimum allowed temperature
export const HEAT_LOSS_W_PER_K = 0.6; // insulated warm box + RHU-style heaters
export const H2E = 3699 / 3600;      // Earth hours per Mars hour (energy integration)
export const localHour = t => ((t % 24) + 24) % 24;
export const solOf = t => Math.floor(t / 24) + 1;

const opt = (cat, id) => CATALOG[cat].options.find(o => o.id === id);

export function resolve(design) {
  return {
    chassis: opt('chassis', design.chassis),
    wheels: opt('wheels', design.wheels),
    solar: opt('solar', design.solar),
    rtg: opt('rtg', design.rtg),
    battery: opt('battery', design.battery),
    cameras: design.cameras.map(id => opt('cameras', id)),
    instruments: design.instruments.map(id => opt('instruments', id)),
    comms: opt('comms', design.comms),
    arm: opt('arm', design.arm),
  };
}

/** Set of capability tags the rover has (used for science task requirements) */
export function capabilities(design) {
  const r = resolve(design);
  const caps = new Set([...design.cameras, ...design.instruments]);
  if (r.arm.scoop) caps.add('scoop');
  if (r.arm.drill) caps.add('drill');
  if (r.arm.apxs) caps.add('apxs');
  return caps;
}
export function hasNeed(caps, need) { return need.split('|').some(n => caps.has(n)); }

// ---------------------------------------------------------------- environment
/** Sun: cosine of zenith angle at local solar hour (equinox, Gale latitude) */
export function sunMu(t) {
  const hour = localHour(t);
  const lat = MARS.latitudeDeg * Math.PI / 180;
  const ha = (hour - 12) * 15 * Math.PI / 180;
  return Math.max(0, Math.cos(lat) * Math.cos(ha));
}
/** Dust optical depth τ over the mission day (forecast dust event) */
export function dustTau(t) {
  const d = MISSION.dust;
  if (t < d.stormStart) return d.tauStart;
  if (t < d.stormPeak) return d.tauStart + (d.tauStorm - d.tauStart) * (t - d.stormStart) / (d.stormPeak - d.stormStart);
  const k = Math.min(1, (t - d.stormPeak) / (d.clearBy - d.stormPeak));
  return d.tauStorm + (0.8 - d.tauStorm) * k; // storm slowly clears to τ≈0.8
}
/** Global irradiance on a horizontal surface (W/m²): direct beam (Beer–Lambert) + diffuse share */
export function irradiance(hour, tau = dustTau(hour)) {
  const mu = sunMu(hour);
  if (mu <= 0.02) return 0;
  const direct = Math.exp(-tau / mu);
  return MARS.solarConstant * mu * (direct + 0.35 * (1 - direct));
}
/** Air temperature (°C): REMS-like diurnal cycle, min ~05:30, max ~14:00 */
export function airTemp(t) {
  const hour = localHour(t);
  const { airTempMinC: lo, airTempMaxC: hi } = MARS;
  let f;
  if (hour >= 5.5 && hour <= 14) f = (1 - Math.cos(Math.PI * (hour - 5.5) / 8.5)) / 2;
  else { const t = hour > 14 ? hour - 14 : hour + 24 - 14; f = Math.exp(-t / 3.2) * (1 - t / 15.5 * 0.15); }
  return lo + (hi - lo) * Math.max(0, f);
}
export function pressurePa(t) {
  const hour = localHour(t);
  const { pressureMinPa: lo, pressureMaxPa: hi } = MARS;
  // Thermal tide: max around 06:00, min around 16:00 (REMS observed pattern)
  return (lo + hi) / 2 + (hi - lo) / 2 * Math.cos((hour - 6) / 24 * 2 * Math.PI * 1.2);
}

// ---------------------------------------------------------------- rover stats
export function computeStats(design) {
  const r = resolve(design);
  const payloadParts = [...r.cameras, ...r.instruments, r.arm, r.comms];
  const payloadMass = payloadParts.reduce((s, o) => s + o.mass, 0);
  const powerMass = r.solar.mass + r.rtg.mass + r.battery.mass;
  const mass = r.chassis.mass + r.wheels.mass + powerMass + payloadMass;
  const cost = [r.chassis, r.wheels, r.solar, r.rtg, r.battery, ...payloadParts].reduce((s, o) => s + o.cost, 0);
  const weight = mass * MARS.g;

  const solarNoon = r.solar.area * irradiance(12, MISSION.dust.tauStart) * PANEL_EFF;
  const solarStorm = r.solar.area * irradiance(12, MISSION.dust.tauStorm) * PANEL_EFF;
  const rtgPower = r.rtg.power;
  const idleInstr = r.instruments.filter(i => i.id === 'rems' || i.id === 'rad').reduce((s, i) => s + i.power, 0);
  const idleLoad = r.chassis.baseLoad + idleInstr;
  const driveCams = r.cameras.filter(c => c.id !== 'mastcam').reduce((s, c) => s + c.power, 0);

  // Driving power on firm gravel, flat, at top speed
  const flat = drivePower(design, r, 'gravel', 0, r.wheels.speed);
  const sandFlat = drivePower(design, r, 'sand', 0, r.wheels.speed);
  const driveLoad = idleLoad + flat.total;

  // Average generation across mission window
  let genWh = 0, idleWh = 0, nightNeed = 0, nightGen = 0;
  for (let h = MISSION.startHour; h < MISSION.endHour; h += 0.1) {
    genWh += (r.solar.area * irradiance(h, MISSION.dust.tauStart) * PANEL_EFF + rtgPower) * 0.1 * H2E;
    idleWh += (idleLoad + heaterPower(r, h)) * 0.1 * H2E;
  }
  // overnight (17:30 → 09:00 next sol): sleep load + heaters vs generation
  for (let h = MISSION.endHour; h < 24 + MISSION.startHour; h += 0.1) {
    const net = (r.chassis.sleepLoad + heaterPower(r, h)) - (r.solar.area * irradiance(h, 0.8) * PANEL_EFF + rtgPower);
    nightNeed = Math.max(nightNeed, (nightGen += net * 0.1 * H2E));
  }
  const hours = MISSION.endHour - MISSION.startHour;
  const avgGen = genWh / hours;
  // Range on battery alone while driving on gravel (km)
  const netDrive = driveLoad - avgGenClear();
  const rangeKm = netDrive <= 0 ? Infinity : r.battery.capacity / netDrive / H2E * r.wheels.speed * 3.699;
  function avgGenClear() { return rtgPower + r.solar.area * irradiance(12, MISSION.dust.tauStart) * PANEL_EFF * 0.7; }

  const maxSlope = {};
  for (const t of Object.keys(TERRAIN)) maxSlope[t] = maxSlopeDeg(r, t);

  const caps = capabilities(design);
  let scienceMax = 0, scienceAvail = 0;
  for (const tg of MISSION.targets) for (const tk of tg.tasks) {
    scienceMax += tk.points;
    if (tk.needs.every(n => hasNeed(caps, n))) scienceAvail += tk.points;
  }

  const issues = [];
  if (payloadMass > r.chassis.payload) issues.push({ lvl: 'err', msg: `Payload ${payloadMass.toFixed(0)} kg exceeds chassis capacity ${r.chassis.payload} kg` });
  if (cost > BUDGET_M) issues.push({ lvl: 'err', msg: `Over budget: $${cost}M of $${BUDGET_M}M` });
  if (r.solar.area === 0 && rtgPower === 0) issues.push({ lvl: 'warn', msg: 'No power generation — battery only' });
  if (avgGen < idleLoad) issues.push({ lvl: 'warn', msg: `Average generation ${avgGen.toFixed(0)} W < idle load ${idleLoad.toFixed(0)} W` });
  if (!r.comms.relay && !r.comms.dte) issues.push({ lvl: 'err', msg: 'No communication system' });
  if (maxSlope.sand < 12) issues.push({ lvl: 'warn', msg: `Weak in sand: max ${maxSlope.sand.toFixed(0)}° slope` });
  if (scienceAvail < scienceMax * 0.4) issues.push({ lvl: 'warn', msg: 'Few instruments — most science targets cannot be measured' });
  if (nightNeed > r.battery.capacity * 0.9) issues.push({ lvl: 'warn', msg: `Night needs ~${nightNeed.toFixed(0)} Wh — battery ${r.battery.capacity} Wh may not survive` });
  if (r.solar.area > 0 && rtgPower === 0) issues.push({ lvl: 'info', msg: 'Solar-only: watch the afternoon dust forecast (τ → 1.6)' });

  return {
    mass, payloadMass, payloadCap: r.chassis.payload, powerMass, cost, budget: BUDGET_M, weight,
    solarNoon, solarStorm, rtgPower, avgGen, idleLoad, driveLoad, driveMech: flat.mech, sandDrive: sandFlat.total,
    battery: r.battery.capacity, genWh, idleWh, rangeKm, topSpeed: r.wheels.speed, maxSlope,
    scienceMax, scienceAvail, durability: r.wheels.durability, hazcam: design.cameras.includes('hazcam'),
    nightNeed, sleepLoad: r.chassis.sleepLoad, issues, valid: !issues.some(i => i.lvl === 'err'), driveCams, hours,
  };
}

export function effectiveCrr(r, terrainId) {
  const t = TERRAIN[terrainId];
  let crr = t.crr;
  if (terrainId === 'sand') crr *= r.wheels.sandCrr;          // sinkage depends on wheel footprint
  // heavier rover per unit wheel area sinks deeper (Bekker-style trend)
  const loadFactor = Math.pow(totalMassR(r) / 500, 0.25) / Math.sqrt(r.wheels.width * r.wheels.radius);
  if (terrainId === 'sand') crr *= loadFactor;
  return crr;
}
function totalMassR(r) {
  return r.chassis.mass + r.wheels.mass + r.solar.mass + r.rtg.mass + r.battery.mass +
    [...r.cameras, ...r.instruments, r.arm, r.comms].reduce((s, o) => s + o.mass, 0);
}
export function maxSlopeDeg(r, terrainId) {
  const t = TERRAIN[terrainId];
  // climbing while wheels don't slip:  tanθ ≤ μ·grip − Crr
  const tan = t.mu * r.wheels.grip - effectiveCrr(r, terrainId);
  return Math.min(TILT_LIMIT_DEG, Math.max(0, Math.atan(tan) * 180 / Math.PI));
}

/**
 * Power to drive at speed v (m/s) on terrain with slope (deg, + uphill).
 * F = m·g·(Crr·cosθ + sinθ);  P_mech = F·v / η
 */
export function drivePower(design, r, terrainId, slopeDeg, v) {
  const m = totalMassR(r);
  const th = slopeDeg * Math.PI / 180;
  const crr = effectiveCrr(r, terrainId);
  const F = m * MARS.g * (crr * Math.cos(th) + Math.max(0, Math.sin(th)));
  const mech = Math.max(0, F * v / DRIVE_EFF);
  const motors = 30 + r.wheels.mass * 1.2;                          // steering/drive actuator overheads
  const nav = 35 + r.cameras.filter(c => c.id !== 'mastcam').reduce((s, c) => s + c.power, 0); // AutoNav computing + cams
  return { mech, motors, nav, total: mech + motors + nav, force: F, crr };
}

/** Electric heater power required to keep the warm electronics box ≥ −40 °C */
export function heaterPower(r, hour) {
  if (r.rtg.heat) return 0; // RTG waste heat circulated by fluid loop
  const T = airTemp(hour);
  const scale = r.chassis.scale;
  return Math.max(0, (WEB_MIN_C + 10 - T) * HEAT_LOSS_W_PER_K * scale * 2);
}

export function solarPower(r, hour, tau) {
  return r.solar.area * irradiance(hour, tau) * PANEL_EFF;
}

/** Slip ratio & resulting speed fraction when climbing */
export function tractionState(r, terrainId, slopeDeg) {
  const t = TERRAIN[terrainId];
  const th = Math.abs(slopeDeg) * Math.PI / 180;
  const demand = effectiveCrr(r, terrainId) + (slopeDeg > 0 ? Math.tan(th) : 0);
  const available = t.mu * r.wheels.grip;
  const slip = Math.min(1.2, demand / available);
  let speedFrac = slip < 0.6 ? 1 : slip >= 1 ? 0 : 1 - Math.pow((slip - 0.6) / 0.4, 2);
  if (Math.abs(slopeDeg) > TILT_LIMIT_DEG) speedFrac = 0;
  return { slip, speedFrac };
}

/** Wheel damage per metre (% of wheel health) */
export function wheelDamagePerM(design, r, terrainId) {
  const haz = design.cameras.includes('hazcam') ? 0.45 : 1;
  return TERRAIN[terrainId].damage * 0.15 / r.wheels.durability * haz;
}

// Task durations (Mars hours) and instrument power while working
export const TASK_INFO = {
  img:   { hours: 0.25, power: 20 }, pano: { hours: 0.6, power: 25 }, chem: { hours: 0.4, power: 60 },
  core:  { hours: 1.2, power: 120 }, scoop: { hours: 0.5, power: 40 }, wx: { hours: 0.3, power: 15 },
  h2o:   { hours: 0.4, power: 15 }, rad: { hours: 0.3, power: 5 },
};

export function fmtHour(t) {
  const h = localHour(t);
  const hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}
