import { MISSION, CATALOG, TERRAIN, MARS } from '../data.js';
import { resolve, capabilities, hasNeed, fmtHour, solOf, effectiveCrr } from '../physics.js';
import { getBackdrop, topbar } from './common.js';
import { renderDashboard } from './sim.js';
import { startMusic } from '../audio.js';

export function evaluate(res) {
  const { S, stats, design, reason } = res;
  const r = resolve(design), caps = capabilities(design);
  const total = S.sent + S.buffer;
  const returnFactor = total > 0 ? (S.sent + 0.5 * S.buffer) / total : 0;
  const score = S.points * returnFactor;
  const completion = score / stats.scienceMax;
  const targetsDone = MISSION.targets.filter(t => S.done[t.id] && Object.keys(S.done[t.id]).length).length;
  const lost = ['power', 'night', 'wheels'].includes(reason);
  let status, cls;
  if (lost) { status = completion >= 0.5 ? 'PARTIAL SUCCESS' : 'MISSION FAILED'; cls = completion >= 0.5 ? 'partial' : 'fail'; }
  else if (completion >= 0.6 && targetsDone >= 3) { status = 'MISSION SUCCESS'; cls = 'ok'; }
  else if (completion >= 0.25) { status = 'PARTIAL SUCCESS'; cls = 'partial'; }
  else { status = 'MISSION FAILED'; cls = 'fail'; }
  const g = completion * (lost ? 0.85 : 1);
  const grade = g >= 0.9 ? 'S' : g >= 0.75 ? 'A' : g >= 0.55 ? 'B' : g >= 0.35 ? 'C' : 'D';

  // ---------------- engineering insights
  const I = [];
  const E = S.E, used = E.idle + E.heat + E.drive + E.science + E.comms;
  const hours = S.t - MISSION.startHour;
  if (reason === 'power') I.push(['bad', '🔋', `Battery ran out on sol ${solOf(S.t)} at ${fmtHour(S.t)}. Over the mission the rover used ${used.toFixed(0)} Wh but generated only ${E.gen.toFixed(0)} Wh. A bigger battery, more solar area, an RTG, or a smaller chassis (lower idle load: ${r.chassis.baseLoad} W) would have helped.`]);
  if (reason === 'night') I.push(['bad', '🌙', `The rover froze overnight. Sleeping needs ${r.chassis.sleepLoad} W plus heaters (−70 °C outside) for ~15 hours with ${r.rtg.power ? 'only' : 'no'} ${r.rtg.power ? r.rtg.power + ' W of' : ''} night-time generation. Spirit & Opportunity survived nights with insulation, small radioisotope heaters and careful battery budgets — try a larger battery or an RTG.`]);
  if (reason === 'wheels') I.push(['bad', '⚙', `Wheels destroyed after ${S.odo.toFixed(0)} m. Damage by terrain: ${Object.entries(S.dmgByTerrain).filter(([, v]) => v > 0.5).map(([k, v]) => `${TERRAIN[k].name} ${v.toFixed(0)}%`).join(', ')}. Curiosity's thin aluminium wheels were punctured by sharp rocks too — mesh tyres or hazcams reduce damage.`]);
  if (r.rtg.power) I.push(['good', '☢', `The MMRTG produced ${E.rtg.toFixed(0)} Wh day and night, and its waste heat saved about ${S.rtgHeatSavedWh.toFixed(0)} Wh of electric heating.`]);
  if (r.solar.area && S.stormSolarLossWh > 50) I.push([S.stormSolarLossWh > 400 ? 'bad' : 'tip', '🌪', `The dust storm (τ up to ${MISSION.dust.tauStorm}) cost your ${r.solar.area} m² arrays ~${S.stormSolarLossWh.toFixed(0)} Wh. Sunlight through dust falls as e^(−τ/μ) — solar-only rovers must plan for dusty seasons.`]);
  if (E.heat > used * 0.12) I.push(['bad', '🔥', `Heaters used ${E.heat.toFixed(0)} Wh (${(E.heat / used * 100).toFixed(0)}% of all energy) to keep electronics above −40 °C. An RTG provides that heat for free.`]);
  if (S.minBattery > r.battery.capacity * 0.3 && !['power', 'night'].includes(reason)) I.push(['good', '🔋', `Healthy power margins — battery never dropped below ${(S.minBattery / r.battery.capacity * 100).toFixed(0)}%.${S.minBattery > r.battery.capacity * 0.7 ? ' You might save mass/cost with a smaller battery.' : ''}`]);
  if (S.slipEvents) {
    const crr = effectiveCrr(r, 'sand');
    I.push(['bad', '⛰', `The rover got stuck ${S.slipEvents}× on slopes beyond its traction. Climbing needs tanθ ≤ μ·grip − Crr; on sand your wheels had Crr ≈ ${crr.toFixed(2)} (limit ${stats.maxSlope.sand.toFixed(0)}°). Bigger/grouser wheels or a lighter rover raise the limit.`]);
  } else if (S.distByTerrain.sand > 40) I.push(['good', '🏜', `Your ${r.wheels.name} wheels crossed ${S.distByTerrain.sand.toFixed(0)} m of loose sand without getting stuck.`]);
  if (S.collisions) I.push(['bad', '💥', `${S.collisions} boulder collision${S.collisions > 1 ? 's' : ''}.${design.cameras.includes('hazcam') ? '' : ' Hazcams detect hazards and let AutoNav steer around them.'}`]);
  else if (design.cameras.includes('hazcam') && S.distByTerrain.rocky > 20) I.push(['good', '◉', `Hazcams kept you clear of boulders across ${S.distByTerrain.rocky.toFixed(0)} m of rock fields and halved wheel wear there.`]);
  // missed science due to missing instruments at visited targets
  const missing = [];
  for (const t of MISSION.targets) if (S.visited.includes(t.id)) for (const tk of t.tasks) if (!tk.needs.every(n => hasNeed(caps, n))) missing.push(`${t.id} ${tk.label} (${tk.points} pts)`);
  if (missing.length) I.push(['bad', '✦', `You reached targets but lacked instruments for: ${missing.join(', ')}.`]);
  const notVisited = MISSION.targets.filter(t => !S.visited.includes(t.id));
  if (notVisited.length) I.push(['tip', '🧭', `Targets not reached: ${notVisited.map(t => t.id + ' ' + t.name).join(', ')}.`]);
  if (S.buffer > 1) I.push(['bad', '📡', `${S.buffer.toFixed(0)} Mb of data never reached Earth (counted at 50%). ${r.comms.dte ? '' : 'A high-gain antenna can send data directly to Earth any time.'}${r.comms.relay ? ' Time science before the 11:30 / 16:00 relay passes.' : ''}`]);
  else if (S.sent > 1) I.push(['good', '📡', `All ${S.sent.toFixed(0)} Mb of science data reached Earth.`]);
  if (stats.mass > 600) {
    const F = stats.mass * MARS.g * effectiveCrr(r, 'gravel');
    I.push(['tip', '⚖', `At ${stats.mass.toFixed(0)} kg your rover needs ${F.toFixed(0)} N just to roll on gravel (F = m·g·Crr). Every kilogram also raises sand sinkage.`]);
  }
  if (stats.cost < stats.budget * 0.6 && completion < 0.6) I.push(['tip', '💰', `You used only $${stats.cost}M of the $${stats.budget}M budget — there was room for more instruments or power.`]);
  return { score, completion, status, cls, grade, targetsDone, lost, insights: I, returnFactor, hours };
}

export const results = {
  enter(app) {
    const bd = getBackdrop(); app.setView(bd.scene, bd.camera, bd.tick);
    startMusic();
    const res = app.state.result;
    if (!res) { app.go('menu'); return; }
    const ev = evaluate(res);
    const { S, stats, design } = res;
    const r = resolve(design), caps = capabilities(design);
    const used = S.E.idle + S.E.heat + S.E.drive + S.E.science + S.E.comms;
    const kpi = (l, v, u) => `<div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">${l}</div><div class="v">${v}</div><div class="u">${u}</div></div>`;
    const el = app.html(`<div class="screen">${topbar('Mission Results', 4, null)}
      <div class="page glass corner" style="width:min(1180px,94vw)">
        <div class="row" style="justify-content:space-between;align-items:center">
          <div class="res-hero" style="text-align:left"><h1 class="${ev.cls}">${ev.status}</h1><div class="muted" style="margin-top:6px">${res.reasonTxt}</div></div>
          <div style="text-align:center"><div class="lbl hd" style="font-size:10px;color:var(--muted)">GRADE</div><div class="grade" style="color:${ev.cls === 'ok' ? 'var(--ok)' : ev.cls === 'partial' ? 'var(--warn)' : 'var(--err)'}">${ev.grade}</div></div>
        </div>
        <div class="kpis">
          ${kpi('MISSION COMPLETION', `${(ev.completion * 100).toFixed(0)}%`, `${ev.score.toFixed(0)} of ${stats.scienceMax} science pts`)}
          ${kpi('DISTANCE', `${S.odo.toFixed(0)} m`, `over ${solOf(S.t)} sol${solOf(S.t) > 1 ? 's' : ''}`)}
          ${kpi('ENERGY', `${used.toFixed(0)} Wh`, `used · ${S.E.gen.toFixed(0)} Wh generated`)}
          ${kpi('SAMPLES', `${S.samples}`, `${S.measurements.length} measurements`)}
          ${kpi('DATA RETURNED', `${S.sent.toFixed(0)} Mb`, `${S.buffer.toFixed(0)} Mb still onboard`)}
          ${kpi('TARGETS', `${ev.targetsDone}/${MISSION.targets.length}`, 'with science completed')}
          ${kpi('WHEEL HEALTH', `${Math.max(0, S.wheel).toFixed(0)}%`, `${S.collisions} collisions · ${S.slipEvents} stuck`)}
          ${kpi('ROVER', `${stats.mass.toFixed(0)} kg`, `$${stats.cost}M · ${r.chassis.name}`)}
        </div>
        <div class="tabs"><button class="btn small primary" data-t="report">Engineering report</button><button class="btn small" data-t="data">Scientific data dashboard</button><button class="btn small" data-t="design">Rover configuration</button></div>
        <div id="tab"></div>
        <div class="row" style="justify-content:flex-end;margin-top:22px;gap:10px;flex-wrap:wrap">
          <button class="btn" data-go="menu">⌂ Main menu</button><button class="btn" data-go="planning">✎ Re-plan route</button>
          <button class="btn" data-go="sim">↺ Fly again</button><button class="btn mars" data-go="design">⚙ Improve the design</button></div>
      </div></div>`);
    const tab = el.querySelector('#tab');
    const show = t => {
      el.querySelectorAll('[data-t]').forEach(b => b.classList.toggle('primary', b.dataset.t === t));
      if (t === 'report') tab.innerHTML = `<div class="grid2" style="grid-template-columns:1.4fr 1fr">
          <div><div class="sec-h" style="padding-left:0">WHAT HELPED · WHAT HURT</div>${ev.insights.map(([k, ic, m]) => `<div class="insight ${k}"><span class="ic">${ic}</span><span>${m}</span></div>`).join('') || '<div class="muted">No notable events.</div>'}</div>
          <div><div class="sec-h" style="padding-left:0">SCIENCE BY TARGET</div>${MISSION.targets.map(t => `<div class="stat" style="padding-left:0"><div class="l"><span>${t.id} ${t.name}</span><b>${t.tasks.filter(k => S.done[t.id]?.[k.id]).length}/${t.tasks.length}</b></div>
            ${t.tasks.map(k => `<div style="font-size:12px;margin-top:3px;color:${S.done[t.id]?.[k.id] ? 'var(--ok)' : k.needs.every(n => hasNeed(caps, n)) ? 'var(--muted)' : 'var(--err)'}">${S.done[t.id]?.[k.id] ? '✔' : k.needs.every(n => hasNeed(caps, n)) ? '○' : '✗'} ${k.label}</div>`).join('')}</div>`).join('')}
            <div class="muted" style="font-size:11.5px;margin-top:10px;line-height:1.5">✔ done · ○ possible but not done · ✗ your rover lacked the instrument</div></div></div>`;
      else if (t === 'data') renderDashboard(tab, S, r, caps, 'live');
      else tab.innerHTML = `<div class="grid3">${['chassis', 'wheels', 'solar', 'rtg', 'battery', 'comms', 'arm'].map(c => {
          const o = r[c]; return `<div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">${CATALOG[c].label.toUpperCase()}</div><div style="margin-top:6px;font-weight:600">${o.name}</div><div class="u">${o.mass} kg · $${o.cost}M</div></div>`;
        }).join('')}<div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">CAMERAS</div><div style="margin-top:6px">${r.cameras.map(c => c.name).join('<br>') || '—'}</div></div>
        <div class="kpi"><div class="lbl hd" style="font-size:10px;color:var(--muted)">INSTRUMENTS</div><div style="margin-top:6px">${r.instruments.map(c => c.name).join('<br>') || '—'}</div></div></div>`;
    };
    el.querySelectorAll('[data-t]').forEach(b => b.onclick = () => show(b.dataset.t));
    el.querySelectorAll('[data-go]').forEach(b => b.onclick = () => app.go(b.dataset.go));
    show('report');
  },
};
