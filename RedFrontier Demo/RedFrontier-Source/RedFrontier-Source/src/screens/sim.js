// ============================================================================
//  MISSION SIMULATION — 3D gameplay driven by the physics model
// ============================================================================
import * as THREE from 'three';
import { MISSION, TERRAIN, MARS, CATALOG } from '../data.js';
import {
  resolve, computeStats, capabilities, hasNeed, drivePower, tractionState, heaterPower, solarPower, dustTau, airTemp,
  pressurePa, wheelDamagePerM, TASK_INFO, fmtHour, H2E, localHour, solOf, irradiance,
} from '../physics.js';
import { height, terrainType, bigRocks, slopeAt } from '../terrain.js';
import { createWorld } from '../world.js';
import { buildRover } from '../rover.js';
import { worldToMap } from '../mapRender.js';
import { mapDataURL, drawTargets } from './missions.js';
import { lineChart, esc } from './common.js';
import { sfx, startAmbience, setAmbience, stopAmbience } from '../audio.js';
import { scienceResult } from '../science.js';

const DTE_RATE_MB_H = 40;

export const sim = {
  enter(app) {
    const design = app.state.design;
    const r = resolve(design);
    const stats = computeStats(design);
    const caps = capabilities(design);
    const world = createWorld(app.renderer, app.settings.quality);
    const rover = buildRover(design);
    world.scene.add(rover.root);
    const route = (app.state.route || []).length > 1 ? app.state.route : null;
    world.setRoute(route);
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 20000);
    const s = r.chassis.scale;
    const roverR = 1.45 * s;
    const rocksBig = bigRocks();
    app.state.attempts++;

    // ------------------------------------------------------------ state
    const S = this.S = {
      t: MISSION.startHour, x: MISSION.landing.x, z: MISSION.landing.z, yaw: Math.atan2(route ? route[1].x - MISSION.landing.x : 1, route ? route[1].z - MISSION.landing.z : 0),
      speed: 0, throttle: 0, steer: 0, battery: r.battery.capacity, wheel: 100, odo: 0,
      E: { gen: 0, solar: 0, rtg: 0, idle: 0, heat: 0, drive: 0, science: 0, comms: 0, wasted: 0 },
      buffer: 0, sent: 0, points: 0, samples: 0, done: {}, measurements: [],
      log: [], tele: [], teleT: 0, task: null, queue: [], autopilot: false, wp: 1,
      slipEvents: 0, slipTimer: 0, collisions: 0, dmgByTerrain: { bedrock: 0, gravel: 0, sand: 0, rocky: 0 }, distByTerrain: { bedrock: 0, gravel: 0, sand: 0, rocky: 0 },
      warp: 1, passes: new Set(), paused: false, ended: false, night: null, dose: 0, minBattery: r.battery.capacity, lastSlip: 0, dteOn: true,
      visited: new Set(), missingNeeds: new Set(), noRelayWarned: false, heaterWh: 0, rtgHeatSavedWh: 0, stormSolarLossWh: 0,
      cam: { yaw: 0, pitch: 0.32, dist: 16 * Math.max(0.75, s), mode: 'chase' }, hazard: false,
      power: { gen: 0, load: 0, solar: 0 }, slope: 0, slip: 0, ty: 'gravel',
    };
    const pos = new THREE.Vector3(), quat = new THREE.Quaternion(), tmpM = new THREE.Matrix4();
    const keys = {};
    const log = (msg, kind = 'info') => { S.log.push({ t: S.t, msg, kind }); };

    // ------------------------------------------------------------ HUD
    const el = app.html(`<div class="screen hud passthrough">
      <div class="hud-tl glass corner">
        <div class="row" style="justify-content:space-between"><div><div class="lbl">MISSION TIME</div><div class="big" id="h-time">SOL 1 · 09:00</div></div>
          <div style="text-align:right"><div class="lbl">BATTERY</div><div class="big" id="h-bp">100%</div></div></div>
        <div class="batt" id="h-batt"><i></i></div>
        <div class="kv"><span>Generation</span><b id="h-gen">0 W</b></div>
        <div class="kv"><span>Consumption</span><b id="h-load">0 W</b></div>
        <div class="kv"><span>Net power</span><b id="h-net">0 W</b></div>
        <div class="kv"><span>Air temp · τ dust</span><b id="h-env">–</b></div>
        <div class="kv"><span>Data onboard · sent</span><b id="h-data">0 · 0 Mb</b></div>
      </div>
      <div class="hud-tc glass"><div class="lbl" id="h-mode">MANUAL DRIVE</div><div class="mono" style="font-size:12px;margin-top:3px" id="h-link">–</div></div>
      <div class="hud-tr glass corner"><canvas id="mini" width="420" height="420" style="width:210px;height:210px;border-radius:8px;display:block"></canvas></div>
      <div class="hud-bl glass corner">
        <div class="row" style="justify-content:space-between;align-items:flex-end"><div><div class="lbl">SPEED</div><div class="big" id="h-spd">0.0 cm/s</div></div><div style="text-align:right"><div class="lbl">ODOMETER</div><div class="big" id="h-odo">0 m</div></div></div>
        <div class="kv" style="margin-top:8px"><span>Terrain</span><b id="h-ter">–</b></div>
        <div class="kv"><span>Slope · wheel slip</span><b id="h-slope">–</b></div>
        <div class="kv"><span>Wheel health</span><b id="h-wh">100%</b></div>
        <div class="batt" id="h-whb" style="height:6px;margin:4px 0 0"><i></i></div>
      </div>
      <div class="hud-br glass"><div class="lbl" style="margin-bottom:6px">OBJECTIVES</div><div id="h-obj"></div>
        <div style="margin-top:8px;border-top:1px solid var(--line);padding-top:6px"><span class="kbd">WASD</span> drive <span class="kbd">R</span> AutoNav <span class="kbd">E</span> science <span class="kbd">Tab</span> data <span class="kbd">M</span> map <span class="kbd">C</span> cam <span class="kbd">T</span> warp <span class="kbd">Esc</span> pause</div>
        <button class="btn small mars" id="endbtn" style="margin-top:8px;width:100%">End mission &amp; report</button></div>
      <div class="toast-wrap" id="toasts"></div>
      <div class="prompt glass" id="prompt" style="display:none"></div>
      <div id="haz" class="glass" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-140px);padding:6px 16px;color:var(--warn);font-family:var(--h);font-size:12px;letter-spacing:.15em">⚠ HAZARD AHEAD</div>
      <div id="navov" class="navcam-overlay" style="display:none"><div class="lbl">NAVCAM · STEREO B/W · LIVE</div><div class="crosshair"></div></div>
      <div id="modal"></div>
    </div>`);
    const $ = id => el.querySelector('#' + id);
    const toast = (msg, kind = '') => {
      const t = document.createElement('div'); t.className = `toast ${kind}`; t.textContent = msg;
      $('toasts').appendChild(t); setTimeout(() => t.remove(), 4200);
      while ($('toasts').children.length > 4) $('toasts').firstChild.remove();
    };
    const miniBg = new Image(); miniBg.src = mapDataURL();
    const mini = $('mini').getContext('2d');

    log(`Touchdown at ${MISSION.site}. Rover mass ${stats.mass.toFixed(0)} kg.`);
    toast('Touchdown confirmed! Drive with WASD or press R for AutoNav', 'ok');
    if (!route) toast('No route planned — drive manually to the beacons', 'warn');
    startAmbience();

    // ------------------------------------------------------------ helpers
    const nearestTarget = () => {
      let best = null, bd = 1e9;
      for (const t of MISSION.targets) { const d = Math.hypot(t.x - S.x, t.z - S.z); if (d < bd) { bd = d; best = t; } }
      return { t: best, d: bd };
    };
    const taskAvailable = tk => tk.needs.every(n => hasNeed(caps, n));
    const objectives = () => MISSION.targets.map(t => {
      const n = t.tasks.filter(k => S.done[t.id]?.[k.id]).length;
      return `<div class="obj ${n === t.tasks.length ? 'done' : ''}"><span class="s">${n === t.tasks.length ? '✔' : n ? '◐' : '○'}</span>${t.id} ${t.name} <span class="muted">${n}/${t.tasks.length}</span></div>`;
    }).join('');

    const end = (reason) => {
      if (S.ended) return;
      S.ended = true; S.paused = true;
      stopAmbience();
      const reasonTxt = {
        power: 'Battery depleted — the rover entered a low-power fault and went silent.',
        night: 'Battery depleted overnight — electronics froze at −70 °C.',
        wheels: 'Wheels destroyed — the rover is immobilised.',
        time: `End of sol ${MISSION.sols} — mission operations complete.`,
        player: 'Mission ended by the flight director.',
      }[reason];
      log(reasonTxt, reason === 'power' || reason === 'night' || reason === 'wheels' ? 'bad' : 'info');
      app.state.result = {
        reason, reasonTxt, design: structuredClone(design), stats, S: { ...S, passes: [...S.passes], visited: [...S.visited], missingNeeds: [...S.missingNeeds] },
      };
      (reason === 'time' || reason === 'player') ? sfx.success() : sfx.fail();
      setTimeout(() => app.go('results'), 1600);
      toast(reasonTxt, reason === 'time' || reason === 'player' ? 'ok' : 'err');
    };

    // ------------------------------------------------------------ energy
    const idleInstr = r.instruments.filter(i => i.id === 'rems' || i.id === 'rad').reduce((a, i) => a + i.power, 0);
    function energyStep(dh, driveW, sciW, sleeping) {
      const tau = dustTau(S.t);
      const solar = solarPower(r, S.t, tau);
      const clear = solarPower(r, S.t, MISSION.dust.tauStart);
      const gen = solar + r.rtg.power;
      const heat = heaterPower(r, S.t);
      if (r.rtg.heat) S.rtgHeatSavedWh += heaterPower({ ...r, rtg: { heat: false }, chassis: r.chassis }, S.t) * dh * H2E;
      let comms = 0;
      if (!sleeping && r.comms.dte && S.buffer > 0.01 && S.dteOn && S.battery > r.battery.capacity * 0.25) {
        const mb = Math.min(S.buffer, DTE_RATE_MB_H * dh); S.buffer -= mb; S.sent += mb; comms = r.comms.txPower;
      }
      const idle = sleeping ? r.chassis.sleepLoad : r.chassis.baseLoad + idleInstr;
      const load = idle + heat + driveW + sciW + comms;
      const wh = H2E * dh;
      S.E.gen += gen * wh; S.E.solar += solar * wh; S.E.rtg += r.rtg.power * wh; S.E.idle += idle * wh; S.E.heat += heat * wh;
      S.E.drive += driveW * wh; S.E.science += sciW * wh; S.E.comms += comms * wh; S.heaterWh += heat * wh;
      if (S.t > MISSION.dust.stormStart) S.stormSolarLossWh += Math.max(0, clear - solar) * wh;
      let nb = S.battery + (gen - load) * wh;
      if (nb > r.battery.capacity) { S.E.wasted += nb - r.battery.capacity; nb = r.battery.capacity; }
      S.battery = nb;
      S.minBattery = Math.min(S.minBattery, S.battery);
      S.power = { gen, load, solar, heat, drive: driveW, comms, idle };
      S.dose += MARS.radiation_mGy_day / 24 * dh * 1000; // µGy
      S.t += dh;
    }
    function telemetry() {
      if (S.t - S.teleT < 0.1) return;
      S.teleT = S.t;
      S.tele.push({ t: S.t, x: S.x, z: S.z, batt: S.battery / r.battery.capacity * 100, gen: S.power.gen, load: S.power.load, temp: airTemp(S.t), p: pressurePa(S.t), tau: dustTau(S.t), elev: height(S.x, S.z), dose: S.dose, odo: S.odo });
    }

    // ------------------------------------------------------------ relay passes
    function checkPasses() {
      const sol = solOf(S.t), lh = localHour(S.t);
      MISSION.relayPasses.forEach((p, i) => {
        const key = `${sol}-${i}`;
        if (lh >= p.t && !S.passes.has(key)) {
          S.passes.add(key);
          if (r.comms.relay) {
            const mb = Math.min(S.buffer, p.capacityMb);
            S.buffer -= mb; S.sent += mb;
            S.battery -= r.comms.txPower * 0.17 * H2E; S.E.comms += r.comms.txPower * 0.17 * H2E;
            toast(`📡 ${p.name} relay pass: ${mb.toFixed(0)} Mb sent to Earth`, 'ok'); sfx.data();
            log(`${p.name} relay pass — ${mb.toFixed(0)} Mb downlinked.`, 'good');
          } else if (!S.noRelayWarned) {
            S.noRelayWarned = true; toast(`${p.name} overhead, but no UHF radio onboard`, 'warn');
            log(`${p.name} relay pass missed — no UHF antenna.`, 'bad');
          }
        }
      });
    }
    const nextLinkText = () => {
      const lh = localHour(S.t), sol = solOf(S.t);
      const nxt = MISSION.relayPasses.map((p, i) => ({ ...p, i })).find(p => !S.passes.has(`${sol}-${p.i}`) && p.t > lh);
      const parts = [];
      if (r.comms.relay) parts.push(nxt ? `UHF: ${nxt.name} pass in ${fmtDur(nxt.t - lh)}` : 'UHF: next pass tomorrow');
      if (r.comms.dte) parts.push(S.buffer > 0.01 && S.dteOn && S.battery > r.battery.capacity * 0.25 ? `X-band: sending ${DTE_RATE_MB_H} Mb/h` : 'X-band: idle');
      return parts.join(' · ');
    };
    const fmtDur = h => `${Math.floor(h)}h ${String(Math.floor((h % 1) * 60)).padStart(2, '0')}m`;

    // ------------------------------------------------------------ science
    const runTask = (tg, tk) => {
      if (S.task || S.done[tg.id]?.[tk.id]) return;
      if (!taskAvailable(tk)) { sfx.error(); tk.needs.filter(n => !hasNeed(caps, n)).forEach(n => S.missingNeeds.add(`${tg.id}:${tk.label}`)); return; }
      const info = TASK_INFO[tk.id];
      S.task = { tg, tk, remaining: info.hours, total: info.hours, power: info.power };
      S.throttle = 0; S.autopilot = false; sfx.scan();
    };
    function finishTask() {
      const { tg, tk } = S.task;
      const res = scienceResult(tg, tk, caps, S);
      S.done[tg.id] ||= {}; S.done[tg.id][tk.id] = res;
      S.buffer += res.dataMb; S.points += res.points; if (tk.sample) S.samples++;
      S.measurements.push({ t: S.t, target: tg.id, targetName: tg.name, task: tk.label, ...res });
      log(`${tg.id} ${tk.label}: ${res.summary}`, 'good');
      toast(`✔ ${tk.label} complete (+${res.points} pts, ${res.dataMb} Mb)`, 'ok'); sfx.data();
      S.task = null;
      if (S.queue.length) { const n = S.queue.shift(); runTask(n.tg, n.tk); }
      if (modalKind === 'science') openScience();
    }

    // ------------------------------------------------------------ modals
    let modalKind = null;
    const closeModal = () => { $('modal').innerHTML = ''; modalKind = null; };
    function openScience() {
      const { t: tg, d } = nearestTarget();
      if (d > 16) { closeModal(); return; }
      modalKind = 'science';
      S.visited.add(tg.id);
      $('modal').innerHTML = `<div class="modal-bg"><div class="modal glass corner">
        <div class="row" style="justify-content:space-between"><div><div class="chip" style="color:var(--mars2);border-color:var(--mars2);display:inline-block">${tg.id} · ${tg.kind.toUpperCase()}</div><h2 style="margin-top:8px">${tg.name}</h2></div><button class="btn iconbtn ghost" data-x>✕</button></div>
        <p class="muted" style="font-size:13px">${tg.blurb}</p>
        ${tg.tasks.map((tk, i) => {
          const done = S.done[tg.id]?.[tk.id]; const av = taskAvailable(tk); const running = S.task?.tk === tk && S.task?.tg === tg;
          const info = TASK_INFO[tk.id];
          return `<div class="task"><div class="num">${i + 1}</div><div><div style="font-weight:600">${tk.label}</div>
            <div class="req">${tk.needs.map(n => n.split('|').map(x => `<span class="${caps.has(x) ? 'y' : 'n'}">${caps.has(x) ? '✓' : '✗'} ${needName(x)}</span>`).join(' or ')).join(' · ')}
            <span class="muted"> · ${Math.round(info.hours * 60)} min · ${info.power} W · ${tk.dataMb} Mb</span></div>
            ${running ? `<div class="progress"><i id="tprog" style="width:${(1 - S.task.remaining / S.task.total) * 100}%"></i></div>` : ''}
            ${done ? `<div class="result-box">${esc(done.detail)}</div>` : ''}</div>
            <div>${done ? '<span class="chip" style="color:var(--ok);border-color:var(--ok)">DONE</span>' : running ? '<span class="chip">RUNNING…</span>' : av ? `<button class="btn small primary" data-run="${i}">Run</button>` : '<span class="chip" style="color:var(--err);border-color:var(--err)">MISSING</span>'}</div></div>`;
        }).join('')}
        <div class="row" style="justify-content:space-between;margin-top:14px"><span class="muted" style="font-size:12px">Battery ${(S.battery / r.battery.capacity * 100).toFixed(0)}% · rover must stay parked while instruments work</span>
        <button class="btn small" data-all>Run all available</button></div>
      </div></div>`;
      $('modal').querySelector('[data-x]').onclick = closeModal;
      $('modal').querySelectorAll('[data-run]').forEach(b => b.onclick = () => { runTask(tg, tg.tasks[+b.dataset.run]); openScience(); });
      $('modal').querySelector('[data-all]').onclick = () => {
        const todo = tg.tasks.filter(tk => !S.done[tg.id]?.[tk.id] && taskAvailable(tk) && S.task?.tk !== tk);
        tg.tasks.filter(tk => !taskAvailable(tk)).forEach(tk => S.missingNeeds.add(`${tg.id}:${tk.label}`));
        if (!S.task && todo.length) runTask(tg, todo.shift());
        S.queue.push(...todo.map(tk => ({ tg, tk }))); openScience();
      };
    }
    const needName = n => ({ mastcam: 'Mastcam', navcam: 'Navcam', chemcam: 'ChemCam', apxs: 'APXS (arm)', drill: 'Drill arm', scoop: 'Scoop arm', rems: 'Weather stn', rad: 'RAD', dan: 'DAN', gpr: 'Radar' }[n] || n);

    function openDashboard(tab = 'live') {
      modalKind = 'dash';
      $('modal').innerHTML = `<div class="modal-bg"><div class="modal wide glass corner">
        <div class="row" style="justify-content:space-between"><h2>Scientific Data Dashboard</h2><button class="btn iconbtn ghost" data-x>✕</button></div>
        <div id="dash" style="margin-top:14px"></div></div></div>`;
      $('modal').querySelector('[data-x]').onclick = closeModal;
      renderDashboard($('modal').querySelector('#dash'), S, r, caps, tab);
    }
    function openMap() {
      modalKind = 'map';
      $('modal').innerHTML = `<div class="modal-bg"><div class="modal glass corner" style="width:min(720px,92vw)"><div class="row" style="justify-content:space-between"><h2>Traverse Map</h2><button class="btn iconbtn ghost" data-x>✕</button></div>
        <canvas width="800" height="800" style="width:100%;margin-top:12px;border-radius:10px"></canvas></div></div>`;
      $('modal').querySelector('[data-x]').onclick = closeModal;
      drawMap($('modal').querySelector('canvas').getContext('2d'), 800, true);
    }
    function openPause() {
      modalKind = 'pause'; S.paused = true;
      $('modal').innerHTML = `<div class="modal-bg"><div class="modal glass corner" style="width:380px;text-align:center">
        <h2 style="margin-bottom:20px">Paused</h2>
        <div class="col"><button class="btn primary" data-a="resume">▶ Resume</button><button class="btn" data-a="restart">↺ Restart mission</button>
        <button class="btn" data-a="design">⚙ Redesign rover</button><button class="btn" data-a="plan">✎ Re-plan route</button><button class="btn" data-a="menu">⌂ Main menu</button></div>
        <div class="muted" style="font-size:12px;margin-top:16px">Sol ${solOf(S.t)} · ${fmtHour(S.t)} · ${S.points} science points</div></div></div>`;
      $('modal').querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
        const a = b.dataset.a; closeModal(); S.paused = false;
        if (a === 'restart') app.go('sim'); else if (a === 'design') app.go('design'); else if (a === 'plan') app.go('planning'); else if (a === 'menu') app.go('menu');
      });
    }
    function drawMap(g, n, big) {
      if (miniBg.complete) g.drawImage(miniBg, 0, 0, n, n);
      drawTargets(g, n, big ? 1.1 : 0.75);
      if (route) {
        g.strokeStyle = 'rgba(70,224,255,.85)'; g.lineWidth = big ? 3 : 2; g.setLineDash([6, 5]); g.beginPath();
        route.forEach((p, i) => { const [x, z] = worldToMap(p.x, p.z, n); i ? g.lineTo(x, z) : g.moveTo(x, z); }); g.stroke(); g.setLineDash([]);
      }
      // trail
      g.strokeStyle = '#3dffa2'; g.lineWidth = big ? 2.5 : 2; g.beginPath();
      S.tele.forEach((p, i) => { if (p.x === undefined) return; const [x, z] = worldToMap(p.x, p.z, n); i ? g.lineTo(x, z) : g.moveTo(x, z); }); g.stroke();
      const [x, z] = worldToMap(S.x, S.z, n);
      g.save(); g.translate(x, z); g.rotate(-S.yaw + Math.PI);
      g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 1.5; const k = big ? 1.4 : 1;
      g.beginPath(); g.moveTo(0, -10 * k); g.lineTo(7 * k, 8 * k); g.lineTo(0, 4 * k); g.lineTo(-7 * k, 8 * k); g.closePath(); g.fill(); g.stroke(); g.restore();
    }

    // ------------------------------------------------------------ input
    this._kd = e => {
      if (e.code === 'Tab') e.preventDefault();
      if (S.ended) return;
      keys[e.code] = true;
      if (e.repeat) return;
      if (e.code === 'Escape') { if (modalKind && modalKind !== 'pause') closeModal(); else if (modalKind === 'pause') { closeModal(); S.paused = false; } else openPause(); }
      if (S.paused || S.night) return;
      if (e.code === 'KeyE') { if (modalKind === 'science') closeModal(); else if (nearestTarget().d < 16) { S.throttle = 0; openScience(); } else toast('No science target within range (get inside the blue ring)', 'warn'); }
      if (e.code === 'Tab') modalKind === 'dash' ? closeModal() : openDashboard();
      if (e.code === 'KeyM') modalKind === 'map' ? closeModal() : openMap();
      if (e.code === 'KeyC') { S.cam.mode = S.cam.mode === 'chase' ? 'navcam' : 'chase'; $('navov').style.display = S.cam.mode === 'navcam' ? 'block' : 'none'; }
      if (e.code === 'KeyT') { S.warp = S.warp === 1 ? 2 : S.warp === 2 ? 4 : 1; toast(`Time warp ×${S.warp}`); }
      if (e.code === 'KeyR') {
        if (!route) { toast('No planned route — go to Planning to create one', 'warn'); return; }
        S.autopilot = !S.autopilot; toast(S.autopilot ? `AutoNav engaged → waypoint ${S.wp}` : 'AutoNav off — manual control'); }
      if (modalKind === 'science' && /^Digit[1-3]$/.test(e.code)) { const tg = nearestTarget().t; const tk = tg.tasks[+e.code.slice(5) - 1]; if (tk) { runTask(tg, tk); openScience(); } }
    };
    this._ku = e => { keys[e.code] = false; };
    let drag = null;
    this._pd = e => { if (e.target === app.renderer.domElement) drag = { x: e.clientX, y: e.clientY }; };
    this._pm = e => {
      if (!drag) return;
      const k = 0.005 * app.settings.sensitivity;
      S.cam.yaw -= (e.clientX - drag.x) * k; S.cam.pitch = Math.max(0.05, Math.min(1.3, S.cam.pitch + (e.clientY - drag.y) * k * (app.settings.invertY ? -1 : 1)));
      drag = { x: e.clientX, y: e.clientY };
    };
    this._pu = () => drag = null;
    this._wh = e => { if (e.target === app.renderer.domElement) S.cam.dist = Math.max(5, Math.min(60, S.cam.dist * (1 + e.deltaY * 0.001))); };
    this._cm = e => e.preventDefault();
    addEventListener('keydown', this._kd); addEventListener('keyup', this._ku); addEventListener('pointerdown', this._pd);
    addEventListener('pointermove', this._pm); addEventListener('pointerup', this._pu); addEventListener('wheel', this._wh); addEventListener('contextmenu', this._cm);
    $('endbtn').onclick = () => {
      $('modal').innerHTML = `<div class="modal-bg"><div class="modal glass corner" style="width:420px;text-align:center"><h2>End the mission?</h2>
        <p class="muted">Data still onboard (${S.buffer.toFixed(0)} Mb) will be counted at half value as "delayed".</p>
        <div class="row" style="justify-content:center"><button class="btn" data-n>Continue</button><button class="btn mars" data-y>End &amp; report</button></div></div></div>`;
      modalKind = 'confirm'; S.paused = true;
      $('modal').querySelector('[data-n]').onclick = () => { closeModal(); S.paused = false; };
      $('modal').querySelector('[data-y]').onclick = () => { closeModal(); S.paused = false; end('player'); };
    };

    // ------------------------------------------------------------ night
    function startNight() {
      S.night = { start: S.t, wake: (solOf(S.t)) * 24 + MISSION.startHour, sol: solOf(S.t) };
      S.autopilot = false; S.throttle = 0; S.task = null; S.queue = [];
      log(`Sol ${S.night.sol} ops complete. Rover going to sleep.`);
      $('modal').innerHTML = `<div class="modal-bg"><div class="modal glass corner" style="width:520px;text-align:center">
        <div class="lbl hd" style="color:var(--neon);font-size:12px">SOL ${S.night.sol} COMPLETE</div><h2 style="margin:10px 0">Rover sleeping through the Martian night</h2>
        <div class="mono" id="nt" style="font-size:28px;margin:12px 0">17:30</div>
        <div class="kpis" style="grid-template-columns:repeat(3,1fr)"><div class="kpi"><div class="lbl">BATTERY</div><div class="v" id="nb">–</div></div><div class="kpi"><div class="lbl">AIR TEMP</div><div class="v" id="ntemp">–</div></div><div class="kpi"><div class="lbl">HEATERS</div><div class="v" id="nh">–</div></div></div>
        <div class="batt" id="nbatt"><i></i></div>
        <p class="muted" style="font-size:12.5px">Sleep load ${r.chassis.sleepLoad} W ${r.rtg.heat ? '· RTG heat keeps the electronics warm' : '+ electric heaters to keep electronics above −40 °C'}${r.rtg.power ? ` · RTG charging ${r.rtg.power} W` : ''}</p></div></div>`;
      modalKind = 'night';
    }
    function nightStep(dt) {
      const span = S.night.wake - S.night.start;
      const dh = Math.min(span / 4.5 * dt, S.night.wake - S.t);
      for (let i = 0; i < 8; i++) energyStep(dh / 8, 0, 0, true);
      telemetry();
      const m = $('modal');
      m.querySelector('#nt').textContent = `${fmtHour(S.t)}`;
      m.querySelector('#nb').textContent = `${Math.max(0, S.battery / r.battery.capacity * 100).toFixed(0)}%`;
      m.querySelector('#ntemp').textContent = `${airTemp(S.t).toFixed(0)}°C`;
      m.querySelector('#nh').textContent = `${S.power.heat.toFixed(0)} W`;
      const b = m.querySelector('#nbatt'); b.querySelector('i').style.width = `${Math.max(0, S.battery / r.battery.capacity * 100)}%`;
      b.className = 'batt ' + (S.battery < r.battery.capacity * 0.2 ? 'low' : S.battery < r.battery.capacity * 0.5 ? 'mid' : '');
      if (S.battery <= 0) { S.battery = 0; S.night = null; closeModal(); end('night'); return; }
      if (S.t >= S.night.wake - 1e-6) {
        S.t = S.night.wake; S.night = null; closeModal();
        toast(`☀ Good morning — Sol ${solOf(S.t)} begins. Battery ${(S.battery / r.battery.capacity * 100).toFixed(0)}%`, 'ok');
        log(`Sol ${solOf(S.t)} wake-up. Battery ${(S.battery / r.battery.capacity * 100).toFixed(0)}%.`);
      }
    }

    // ------------------------------------------------------------ main tick
    const fwd = new THREE.Vector3(), up = new THREE.Vector3(), right = new THREE.Vector3();
    let hudT = 0, miniT = 0;
    const camPos = new THREE.Vector3(S.x, height(S.x, S.z) + 10, S.z + 20), camLook = new THREE.Vector3();
    const tick = (dt) => {
      if (S.night) { nightStep(dt); }
      else if (!S.paused && !S.ended) { const n = window.__turbo || 1; for (let i = 0; i < n && !S.ended && !S.night; i++) step(dt); }
      // ----- rover pose
      const h = (x, z) => height(x, z);
      const fx = Math.sin(S.yaw), fz = Math.cos(S.yaw), L = 1.4 * s, W = 1.0 * s;
      const hf = h(S.x + fx * L, S.z + fz * L), hb = h(S.x - fx * L, S.z - fz * L);
      const hr = h(S.x + fz * W, S.z - fx * W), hl = h(S.x - fz * W, S.z + fx * W);
      fwd.set(fx * 2 * L, hf - hb, fz * 2 * L).normalize();
      right.set(fz * 2 * W, hr - hl, -fx * 2 * W).normalize();
      up.crossVectors(fwd, right).normalize(); if (up.y < 0) up.negate();
      right.crossVectors(up, fwd).normalize();
      tmpM.makeBasis(right, up, fwd);
      quat.setFromRotationMatrix(tmpM);
      rover.root.quaternion.slerp(quat, Math.min(1, dt * 8));
      pos.set(S.x, (hf + hb + hl + hr) / 4, S.z);
      rover.root.position.lerp(pos, Math.min(1, dt * 12));
      rover.update(dt, S.speed * MISSION.timeScale * S.warp);
      // ----- camera
      if (S.cam.mode === 'navcam') {
        camera.fov = 50; const mast = new THREE.Vector3(0, 2.15 * s, 0.6 * s).applyQuaternion(rover.root.quaternion).add(rover.root.position);
        camera.position.copy(mast); camLook.set(S.x + fx * 30, h(S.x + fx * 30, S.z + fz * 30) + 0.5, S.z + fz * 30); camera.lookAt(camLook);
        rover.root.visible = false;
      } else {
        rover.root.visible = true; camera.fov = 55;
        const a = S.yaw + Math.PI + S.cam.yaw, d = S.cam.dist;
        const target = new THREE.Vector3(S.x - Math.sin(a) * -d * Math.cos(S.cam.pitch), 0, S.z - Math.cos(a) * -d * Math.cos(S.cam.pitch));
        target.y = Math.max(h(target.x, target.z) + 1.5, rover.root.position.y + 1.5 + Math.sin(S.cam.pitch) * d);
        camPos.lerp(target, Math.min(1, dt * 4));
        camera.position.copy(camPos);
        camLook.set(S.x, rover.root.position.y + 1.4 * s, S.z); camera.lookAt(camLook);
      }
      camera.updateProjectionMatrix();
      world.update(dt, S.t, dustTau(S.t), rover.root.position, Math.abs(S.speed) * MISSION.timeScale);
      setAmbience(Math.min(1, (dustTau(S.t) - 0.5)), Math.min(1, Math.abs(S.speed) / r.wheels.speed));
      hudT += dt; if (hudT > 0.12) { hudT = 0; updateHud(); }
      miniT += dt; if (miniT > 0.3) { miniT = 0; mini.clearRect(0, 0, 420, 420); drawMap(mini, 420, false); }
      if (S.task && modalKind === 'science') { const p = el.querySelector('#tprog'); if (p) p.style.width = `${(1 - S.task.remaining / S.task.total) * 100}%`; }
    };

    function step(dt) {
      const warp = S.task ? Math.max(S.warp, 4) : S.warp;
      const dtSim = dt * MISSION.timeScale * warp;   // Mars seconds
      const dh = dtSim / MISSION.secPerHour;          // Mars hours
      // --- controls
      let thr = 0, steer = 0;
      const modalOpen = modalKind && modalKind !== 'science';
      if (!modalOpen && !S.task) {
        if (keys.KeyW || keys.ArrowUp) thr += 1; if (keys.KeyS || keys.ArrowDown) thr -= 1;
        if (keys.KeyA || keys.ArrowLeft) steer += 1; if (keys.KeyD || keys.ArrowRight) steer -= 1;
        if (keys.Space) thr = 0;
        if ((thr || steer) && S.autopilot) { S.autopilot = false; toast('Manual override — AutoNav off'); }
        if (S.autopilot && route) {
          const wp = route[S.wp];
          if (!wp) { S.autopilot = false; toast('Route complete!', 'ok'); }
          else {
            const dx = wp.x - S.x, dz = wp.z - S.z, dist = Math.hypot(dx, dz);
            if (dist < 5) {
              S.wp++;
              const tg = MISSION.targets.find(t => Math.hypot(t.x - wp.x, t.z - wp.z) < 3);
              if (tg && tg.tasks.some(tk => !S.done[tg.id]?.[tk.id])) { S.autopilot = false; toast(`Arrived at ${tg.id} ${tg.name} — press E for science`, 'ok'); }
            } else {
              let desired = Math.atan2(dx, dz);
              if (S.hazard && S.hazardSide) desired += S.hazardSide * 0.9; // hazcam-assisted avoidance
              let diff = desired - S.yaw; while (diff > Math.PI) diff -= 2 * Math.PI; while (diff < -Math.PI) diff += 2 * Math.PI;
              steer = Math.max(-1, Math.min(1, diff * 2.5));
              thr = Math.abs(diff) > 0.6 ? 0 : 1;
            }
          }
        }
      }
      // --- turning (in place or while driving)
      S.yaw += steer * 0.55 * dt * Math.min(warp, 2);
      // --- traction & slope along travel direction
      const fx = Math.sin(S.yaw), fz = Math.cos(S.yaw);
      const dir = thr >= 0 ? 1 : -1;
      const ahead = height(S.x + fx * 2 * dir, S.z + fz * 2 * dir), behind = height(S.x - fx * 2 * dir, S.z - fz * 2 * dir);
      const slope = Math.atan2(ahead - behind, 4) * 180 / Math.PI;
      const ty = terrainType(S.x, S.z);
      const tr = tractionState(r, ty, slope);
      S.slope = slope; S.ty = ty; S.slip = tr.slip;
      const target = thr * r.wheels.speed * tr.speedFrac * (S.battery > 0 ? 1 : 0);
      S.speed += (target - S.speed) * Math.min(1, dt * 3);
      if (thr && tr.speedFrac < 0.15) {
        S.slipTimer += dt;
        if (S.slipTimer > 1.2 && performance.now() - S.lastSlip > 4000) {
          S.lastSlip = performance.now(); S.slipEvents++;
          toast(`⚠ Wheels slipping: ${slope.toFixed(0)}° on ${TERRAIN[ty].name.toLowerCase()} is beyond your traction limit`, 'warn');
          log(`Stuck: ${slope.toFixed(0)}° slope on ${TERRAIN[ty].name.toLowerCase()} (slip ${(tr.slip * 100).toFixed(0)}%).`, 'bad');
        }
        if (S.autopilot && S.slipTimer > 3) { S.autopilot = false; toast('AutoNav halted — terrain beyond traction limits. Back up and drive around it.', 'err'); }
      } else S.slipTimer = 0;
      // --- move & collide
      const move = S.speed * dtSim;
      let nx = S.x + fx * move, nz = S.z + fz * move;
      let hit = null;
      S.hazard = false; S.hazardSide = 0;
      for (const rk of rocksBig) {
        const d = Math.hypot(rk.x - nx, rk.z - nz);
        if (d < rk.size * 0.85 + roverR) hit = rk;
        if (stats.hazcam) {
          const rx = rk.x - S.x, rz = rk.z - S.z, along = rx * fx + rz * fz, lat = rx * fz - rz * fx;
          if (along > 0 && along < 12 && Math.abs(lat) < rk.size + roverR + 0.6) { S.hazard = true; S.hazardSide = lat > 0 ? -1 : 1; } // steer away from the rock
        }
      }
      if (Math.abs(nx) > 440 || Math.abs(nz) > 440) { nx = S.x; nz = S.z; }
      if (hit) {
        if (Math.abs(S.speed) > r.wheels.speed * 0.3) {
          S.collisions++; const dmg = 3 / r.wheels.durability; S.wheel -= dmg; S.dmgByTerrain.rocky += dmg;
          toast(`💥 Collision with a boulder! Wheel damage −${dmg.toFixed(1)}%`, 'err'); sfx.error();
          log(`Collision with boulder (${hit.size.toFixed(1)} m).`, 'bad');
        }
        S.speed = 0; nx = S.x; nz = S.z;
      }
      const moved = Math.hypot(nx - S.x, nz - S.z);
      S.x = nx; S.z = nz; S.odo += moved;
      S.distByTerrain[ty] += moved;
      const dmg = wheelDamagePerM(design, r, ty) * moved; S.wheel -= dmg; S.dmgByTerrain[ty] += dmg;
      // --- energy
      const driving = Math.abs(thr) > 0 || Math.abs(steer) > 0;
      const driveW = driving ? drivePower(design, r, ty, slope * Math.sign(thr || 1), Math.abs(S.speed)).total : 0;
      let sciW = 0;
      if (S.task) { sciW = S.task.power; S.task.remaining -= dh; if (S.task.remaining <= 0) finishTask(); }
      energyStep(dh, driveW, sciW, false);
      S.lastDrive = driveW;
      checkPasses();
      telemetry();
      // --- state checks
      if (S.battery <= 0) { S.battery = 0; end('power'); return; }
      if (S.wheel <= 0) { S.wheel = 0; end('wheels'); return; }
      if (S.wheel < 25 && !S.wheelWarned) { S.wheelWarned = true; toast('⚠ Wheel health below 25% — avoid rock fields!', 'err'); }
      if (S.battery < r.battery.capacity * 0.15 && !S.lowWarned) { S.lowWarned = true; toast('⚠ Battery below 15% — park in the sun or reduce activity', 'err'); }
      if (S.battery > r.battery.capacity * 0.3) S.lowWarned = false;
      if (S.t > MISSION.dust.stormStart && !S.stormWarned) { S.stormWarned = true; toast('🌪 Dust storm arriving — solar output dropping', 'warn'); log('Dust storm onset: τ rising toward 1.6.', 'bad'); }
      for (const t of MISSION.targets) if (!S.visited.has(t.id) && Math.hypot(t.x - S.x, t.z - S.z) < 16) { S.visited.add(t.id); toast(`🎯 Reached ${t.id} ${t.name} — press E`, 'ok'); log(`Arrived at ${t.id} ${t.name}.`); }
      if (localHour(S.t) >= MISSION.endHour) {
        if (solOf(S.t) >= MISSION.sols) end('time'); else startNight();
      }
    }

    function updateHud() {
      const bp = Math.max(0, S.battery / r.battery.capacity * 100);
      $('h-time').textContent = `SOL ${solOf(S.t)} · ${fmtHour(S.t)}`;
      $('h-bp').textContent = `${bp.toFixed(0)}%`;
      const b = $('h-batt'); b.querySelector('i').style.width = bp + '%'; b.className = 'batt ' + (bp < 20 ? 'low' : bp < 50 ? 'mid' : '');
      $('h-gen').textContent = `${S.power.gen.toFixed(0)} W${r.solar.area ? ` (☀ ${S.power.solar.toFixed(0)})` : ''}`;
      $('h-load').textContent = `${S.power.load.toFixed(0)} W`;
      const net = S.power.gen - S.power.load;
      $('h-net').innerHTML = `<span style="color:${net >= 0 ? 'var(--ok)' : 'var(--err)'}">${net >= 0 ? '+' : ''}${net.toFixed(0)} W</span>`;
      $('h-env').textContent = `${airTemp(S.t).toFixed(0)}°C · ${dustTau(S.t).toFixed(2)}`;
      $('h-data').textContent = `${S.buffer.toFixed(0)} · ${S.sent.toFixed(0)} Mb`;
      $('h-spd').textContent = `${(Math.abs(S.speed) * 100).toFixed(1)} cm/s`;
      $('h-odo').textContent = `${S.odo.toFixed(0)} m`;
      $('h-ter').textContent = TERRAIN[S.ty].name;
      $('h-slope').innerHTML = `${S.slope.toFixed(1)}° · <span style="color:${S.slip > 0.85 ? 'var(--err)' : S.slip > 0.6 ? 'var(--warn)' : 'inherit'}">${Math.min(100, S.slip * 100).toFixed(0)}%</span>`;
      $('h-wh').textContent = `${Math.max(0, S.wheel).toFixed(0)}%`;
      const wb = $('h-whb'); wb.querySelector('i').style.width = Math.max(0, S.wheel) + '%'; wb.className = 'batt ' + (S.wheel < 25 ? 'low' : S.wheel < 55 ? 'mid' : '');
      $('h-mode').textContent = S.task ? `SCIENCE: ${S.task.tk.label.toUpperCase()} · ×${Math.max(S.warp, 4)}` : `${S.autopilot ? `AUTONAV → WP ${S.wp}` : 'MANUAL DRIVE'} · TIME ×${S.warp}`;
      $('h-link').textContent = nextLinkText();
      $('h-obj').innerHTML = objectives();
      const nt = nearestTarget();
      const pr = $('prompt');
      if (nt.d < 16 && !modalKind) { pr.style.display = 'block'; pr.innerHTML = `<span class="kbd">E</span> Start science at <b>${nt.t.id} ${nt.t.name}</b>`; }
      else pr.style.display = 'none';
      $('haz').style.display = S.hazard ? 'block' : 'none';
    }

    app.setView(world.scene, camera, tick);
    this._cleanup = () => { world.scene.remove(rover.root); world.dispose(); stopAmbience(); };
  },
  exit() {
    removeEventListener('keydown', this._kd); removeEventListener('keyup', this._ku); removeEventListener('pointerdown', this._pd);
    removeEventListener('pointermove', this._pm); removeEventListener('pointerup', this._pu); removeEventListener('wheel', this._wh); removeEventListener('contextmenu', this._cm);
    this._cleanup?.();
  },
};

// ---------------------------------------------------------------- dashboard (shared with results)
export function renderDashboard(root, S, r, caps, tab = 'live') {
  const T = S.tele;
  const tabs = [['live', 'Telemetry'], ['science', `Science log (${S.measurements.length})`], ['energy', 'Energy budget'], ['events', 'Mission log']];
  root.innerHTML = `<div class="tabs">${tabs.map(([k, l]) => `<button class="btn small ${k === tab ? 'primary' : ''}" data-tab="${k}">${l}</button>`).join('')}</div><div id="dbody"></div>`;
  root.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => renderDashboard(root, S, r, caps, b.dataset.tab));
  const body = root.querySelector('#dbody');
  const xf = v => `S${solOf(v)} ${fmtHour(v)}`;
  if (tab === 'live') {
    body.innerHTML = `<div class="grid2"><canvas class="chart" id="c1"></canvas><canvas class="chart" id="c2"></canvas><canvas class="chart" id="c3"></canvas><canvas class="chart" id="c4"></canvas></div>
      <div class="muted" style="font-size:11px;margin-top:8px">${caps.has('rems') ? 'Weather data measured by your REMS-type station.' : '⚠ No weather station: temperature &amp; pressure shown are mission-control forecasts, not rover measurements.'} ${caps.has('rad') ? `Radiation dose so far: ${S.dose.toFixed(0)} µGy (RAD).` : 'No radiation detector onboard.'}</div>`;
    requestAnimationFrame(() => {
      lineChart(body.querySelector('#c1'), [{ name: 'Battery %', color: '#3dffa2', data: T.map(p => [p.t, p.batt]), fill: 'rgba(61,255,162,.08)' }], { title: 'BATTERY STATE OF CHARGE', yMin: 0, yMax: 100, xfmt: xf });
      lineChart(body.querySelector('#c2'), [{ name: 'Generation W', color: '#ffc24a', data: T.map(p => [p.t, p.gen]) }, { name: 'Load W', color: '#ff6a2b', data: T.map(p => [p.t, p.load]) }], { title: 'POWER', yMin: 0, xfmt: xf });
      lineChart(body.querySelector('#c3'), [{ name: 'Air temp °C', color: '#3fd0ff', data: T.map(p => [p.t, p.temp]) }], { title: 'TEMPERATURE', xfmt: xf });
      lineChart(body.querySelector('#c4'), [{ name: 'Pressure Pa', color: '#b58cff', data: T.map(p => [p.t, p.p]) }], { title: 'ATMOSPHERIC PRESSURE', xfmt: xf });
    });
  } else if (tab === 'science') {
    body.innerHTML = S.measurements.length ? `<table class="datatable"><tr><th>Time</th><th>Target</th><th>Measurement</th><th>Instrument</th><th>Result</th><th>Data</th></tr>
      ${S.measurements.map(m => `<tr><td class="mono">S${solOf(m.t)} ${fmtHour(m.t)}</td><td>${m.target}<div class="muted">${m.targetName}</div></td><td>${m.task}</td><td>${m.instrument}</td><td>${m.html || esc(m.summary)}</td><td class="mono">${m.dataMb} Mb</td></tr>`).join('')}</table>`
      : '<div class="muted" style="padding:20px">No measurements yet. Drive to a target beacon and press E.</div>';
  } else if (tab === 'energy') {
    const E = S.E; const used = E.idle + E.heat + E.drive + E.science + E.comms;
    const row = (l, v, c) => `<div class="stat"><div class="l"><span>${l}</span><b>${v.toFixed(0)} Wh</b></div><div class="meter"><i style="width:${Math.min(100, v / Math.max(1, used, E.gen) * 100)}%;background:${c}"></i></div></div>`;
    body.innerHTML = `<div class="grid2"><div><div class="sec-h">GENERATED · ${E.gen.toFixed(0)} Wh</div>${row('Solar arrays', E.solar, '#ffc24a')}${row('RTG', E.rtg, '#ff6a2b')}${row('Wasted (battery full)', E.wasted, '#666')}</div>
      <div><div class="sec-h">CONSUMED · ${used.toFixed(0)} Wh</div>${row('Avionics & thermal (idle)', E.idle, '#3fd0ff')}${row('Heaters', E.heat, '#ff4d5e')}${row('Driving (motors, AutoNav, F·v/η)', E.drive, '#3dffa2')}${row('Science instruments', E.science, '#b58cff')}${row('Communication', E.comms, '#ffffff')}</div></div>
      <div class="muted" style="font-size:12px;margin-top:12px;line-height:1.6">Battery: <span class="mono">E(t+Δt) = E(t) + (P<sub>gen</sub> − P<sub>load</sub>)·Δt</span> · Driving force: <span class="mono">F = m·g·(C<sub>rr</sub>·cosθ + sinθ)</span>, g = 3.721 m/s² · Solar: <span class="mono">P = A·η·S·μ·(e<sup>−τ/μ</sup> + 0.35(1−e<sup>−τ/μ</sup>))</span></div>`;
  } else {
    body.innerHTML = `<div style="max-height:52vh;overflow:auto" class="scroll">${[...S.log].reverse().map(l => `<div class="insight ${l.kind === 'bad' ? 'bad' : l.kind === 'good' ? 'good' : 'tip'}" style="margin-bottom:6px"><span class="mono" style="min-width:90px">S${solOf(l.t)} ${fmtHour(l.t)}</span><span>${esc(l.msg)}</span></div>`).join('')}</div>`;
  }
}
