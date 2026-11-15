import { MISSION, TERRAIN } from '../data.js';
import { computeStats, fmtHour, solOf } from '../physics.js';
import { estimateRoute, autoPlan } from '../planner.js';
import { worldToMap, mapToWorld } from '../mapRender.js';
import { height, slopeAt, terrainType } from '../terrain.js';
import { getBackdrop, topbar, wireBack } from './common.js';
import { mapDataURL, drawTargets } from './missions.js';
import { sfx } from '../audio.js';

export const planning = {
  enter(app) {
    const bd = getBackdrop(); app.setView(bd.scene, bd.camera, bd.tick);
    const st = app.state;
    if (!st.route || st.route.length < 1) st.route = [{ x: MISSION.landing.x, z: MISSION.landing.z }];
    const N = 900;
    const el = app.html(`<div class="screen plan">${topbar('Mission Planning', 2, 'design')}
      <div class="mapwrap glass corner"><canvas width="${N}" height="${N}"></canvas></div>
      <div class="side glass corner">
        <div class="sec-h">TRAVERSE PLAN</div>
        <div class="muted" style="font-size:12px;padding:0 16px 8px;line-height:1.5">Click the map to add waypoints from the landing site. Click near a target to snap to it. Right-click removes the last point. Red sections are too steep or too soft for <b>your</b> wheels.</div>
        <div class="row" style="padding:0 16px 10px;gap:8px"><button class="btn small" id="auto">✦ Auto-plan</button><button class="btn small" id="undo">↶ Undo</button><button class="btn small" id="clear">✖ Clear</button></div>
        <div class="legend">${Object.entries(TERRAIN).map(([k, t]) => `<span><i style="background:rgb(${t.color.map(c => c * 255 | 0)})"></i>${t.name}</span>`).join('')}</div>
        <div id="est" class="scroll" style="overflow:auto;flex:1"></div>
        <div id="hover" class="muted mono" style="font-size:11px;padding:8px 16px;border-top:1px solid var(--line)">Hover the map for terrain info</div>
        <div style="padding:14px 16px;border-top:1px solid var(--line)"><button class="btn mars" id="go" style="width:100%">Launch mission ▶</button></div>
      </div></div>`);
    wireBack(app, el);
    const cv = el.querySelector('canvas'), g = cv.getContext('2d');
    const bg = new Image(); bg.src = mapDataURL();
    let est = null;

    const draw = () => {
      g.clearRect(0, 0, N, N);
      g.imageSmoothingEnabled = true; g.drawImage(bg, 0, 0, N, N);
      drawTargets(g, N, 1.3);
      if (est) for (const seg of est.segs) for (const s of seg.samples) {
        const [a, b] = worldToMap(s.x, s.z, N), [c, d] = worldToMap(s.x1, s.z1, N);
        g.strokeStyle = s.bad ? '#ff3b4e' : '#46e0ff'; g.lineWidth = s.bad ? 5 : 3.5;
        g.shadowColor = s.bad ? '#ff3b4e' : '#3fd0ff'; g.shadowBlur = 8;
        g.beginPath(); g.moveTo(a, b); g.lineTo(c, d); g.stroke();
      }
      g.shadowBlur = 0;
      st.route.forEach((p, i) => {
        if (!i) return;
        const [x, z] = worldToMap(p.x, p.z, N);
        g.fillStyle = '#04122a'; g.strokeStyle = '#46e0ff'; g.lineWidth = 2;
        g.beginPath(); g.arc(x, z, 9, 0, Math.PI * 2); g.fill(); g.stroke();
        g.fillStyle = '#fff'; g.font = '600 10px Orbitron, sans-serif'; g.textAlign = 'center'; g.fillText(i, x, z + 3.5); g.textAlign = 'left';
      });
      if (est?.stuckAt) {
        const [x, z] = worldToMap(est.stuckAt.x, est.stuckAt.z, N);
        g.fillStyle = '#ff3b4e'; g.font = '600 12px Exo 2, sans-serif';
        g.fillText(`⚠ ${est.stuckAt.slope.toFixed(0)}° ${TERRAIN[est.stuckAt.ty].name.toLowerCase()} — limit ${est.stuckAt.lim.toFixed(0)}°`, x + 12, z - 10);
      }
    };
    const update = () => {
      est = st.route.length > 1 ? estimateRoute(st.design, st.route) : null;
      const s = computeStats(st.design);
      const E = el.querySelector('#est');
      if (!est) { E.innerHTML = `<div class="muted" style="padding:16px;font-size:13px">No route yet. Add waypoints or press Auto-plan.</div>`; draw(); return; }
      const pct = v => Math.max(0, v / est.capacity * 100);
      const ok = !est.problems.length;
      E.innerHTML = `
        <div class="stat"><div class="l"><span>Distance</span><b>${est.dist.toFixed(0)} m</b></div>
          <div class="l"><span>Targets on route</span><b>${est.visited.length}/${MISSION.targets.length} ${est.visited.join(' ')}</b></div>
          <div class="l"><span>Estimated finish</span><b>Sol ${est.endSol} · ${fmtHour(est.endHour)}</b></div>
          <div class="l"><span>Lowest battery (incl. nights)</span><b style="color:${est.minBattery < 0 ? 'var(--err)' : est.minBattery < est.capacity * 0.2 ? 'var(--warn)' : 'var(--ok)'}">${pct(est.minBattery).toFixed(0)}%</b></div>
          <div class="meter ${est.minBattery < 0 ? 'err' : est.minBattery < est.capacity * 0.2 ? 'warn' : ''}"><i style="width:${Math.min(100, pct(est.minBattery))}%"></i></div>
          <div class="l" style="margin-top:6px"><span>Estimated wheel wear</span><b>${est.damage.toFixed(0)}%</b></div>
          <div class="meter ${est.damage > 70 ? 'err' : est.damage > 40 ? 'warn' : ''}"><i style="width:${Math.min(100, est.damage)}%"></i></div></div>
        <div class="sec-h">TERRAIN MIX</div>
        ${Object.entries(est.terrainDist).map(([k, v]) => `<div class="wp"><span>${TERRAIN[k].name}</span><span>${v.toFixed(0)} m</span></div>`).join('')}
        <div class="sec-h">FLIGHT DIRECTOR CHECK</div>
        <div class="issues">${ok ? '<div class="issue info">✔ Plan looks feasible for your rover.</div>' : est.problems.map(p => `<div class="issue warn">⚠ ${p}</div>`).join('')}
        <div class="issue info" style="margin-top:8px">ℹ Estimates assume full speed and running every task your instruments allow. Real driving will differ!</div></div>
        <div class="sec-h">WAYPOINTS</div>
        ${st.route.map((p, i) => `<div class="wp"><span>${i ? '#' + i : 'Landing'} ${p.target ? '· ' + p.target : ''}</span><span>${p.x.toFixed(0)}, ${p.z.toFixed(0)} · ${height(p.x, p.z).toFixed(0)} m</span></div>`).join('')}`;
      draw();
    };
    bg.onload = update; if (bg.complete) update();

    const toWorld = e => {
      const r = cv.getBoundingClientRect();
      return mapToWorld((e.clientX - r.left) / r.width * N, (e.clientY - r.top) / r.height * N, N);
    };
    cv.addEventListener('click', e => {
      let [x, z] = toWorld(e);
      let target;
      for (const t of MISSION.targets) if (Math.hypot(t.x - x, t.z - z) < 22) { x = t.x; z = t.z; target = t.id; }
      if (Math.abs(x) > 430 || Math.abs(z) > 430) { sfx.error(); return; }
      st.route.push({ x, z, target }); sfx.select(); update();
    });
    cv.addEventListener('contextmenu', e => { e.preventDefault(); if (st.route.length > 1) { st.route.pop(); update(); } });
    cv.addEventListener('mousemove', e => {
      const [x, z] = toWorld(e);
      el.querySelector('#hover').textContent = `x ${x.toFixed(0)} z ${z.toFixed(0)} · elev ${height(x, z).toFixed(1)} m · slope ${slopeAt(x, z).deg.toFixed(1)}° · ${TERRAIN[terrainType(x, z)].name}`;
    });
    el.querySelector('#auto').onclick = () => { st.route = autoPlan(); update(); };
    el.querySelector('#undo').onclick = () => { if (st.route.length > 1) { st.route.pop(); update(); } };
    el.querySelector('#clear').onclick = () => { st.route = [{ x: MISSION.landing.x, z: MISSION.landing.z }]; update(); };
    el.querySelector('#go').onclick = () => {
      if (!computeStats(st.design).valid) { sfx.error(); return; }
      app.go('sim');
    };
  },
};
