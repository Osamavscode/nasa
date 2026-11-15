import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { CATALOG, CATEGORY_ORDER, MISSION } from '../data.js';
import { computeStats, capabilities, hasNeed } from '../physics.js';
import { buildRover } from '../rover.js';
import { topbar, wireBack } from './common.js';
import { sfx, stopMusic } from '../audio.js';

let hangar = null;
function getHangar(renderer) {
  if (hangar) return hangar;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050b1a);
  scene.fog = new THREE.Fog(0x050b1a, 14, 40);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 200);
  // floor
  const floor = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.MeshStandardMaterial({ color: 0x0a1328, metalness: 0.6, roughness: 0.35 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const grid = new THREE.GridHelper(60, 60, 0x1f8fff, 0x12305a); grid.material.transparent = true; grid.material.opacity = 0.25; grid.position.y = 0.002; scene.add(grid);
  const plat = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.8, 0.12, 64), new THREE.MeshStandardMaterial({ color: 0x1a2440, metalness: 0.8, roughness: 0.3 }));
  plat.position.y = 0.06; plat.receiveShadow = true; scene.add(plat);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.7, 0.025, 8, 128), new THREE.MeshBasicMaterial({ color: 0xff8a3c }));
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.125; scene.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.012, 8, 128), new THREE.MeshBasicMaterial({ color: 0x3fd0ff }));
  ring2.rotation.x = Math.PI / 2; ring2.position.y = 0.125; scene.add(ring2);
  // light strips on far wall
  for (let i = 0; i < 9; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.08, 6, 0.08), new THREE.MeshBasicMaterial({ color: i % 2 ? 0x1f8fff : 0x3fd0ff }));
    const a = -0.9 + i * 0.22; s.position.set(Math.sin(a) * 16, 3, -Math.cos(a) * 16); scene.add(s);
  }
  scene.add(new THREE.HemisphereLight(0x8fb8ff, 0x101830, 0.8));
  const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(4, 8, 5); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5 }); scene.add(key);
  const rim = new THREE.DirectionalLight(0xff8a50, 1.6); rim.position.set(-5, 3, -6); scene.add(rim);
  const fill = new THREE.PointLight(0x3fd0ff, 8, 12); fill.position.set(-3, 1.5, 3); scene.add(fill);
  hangar = { scene, camera, ring, ring2 };
  return hangar;
}

const fmt = (v, d = 0) => Number(v).toFixed(d);

export const design = {
  enter(app) {
    stopMusic();
    const H = getHangar(app.renderer);
    const st = app.state;
    let cat = 'chassis', rover = null;
    let yaw = 0.7, pitch = 0.32, dist = 8.5, auto = true, drag = null;

    const rebuild = () => {
      if (rover) H.scene.remove(rover.root);
      rover = buildRover(st.design);
      rover.root.position.y = 0.12;
      H.scene.add(rover.root);
    };
    rebuild();

    const tick = (dt) => {
      if (auto) yaw += dt * 0.15;
      const c = H.camera;
      c.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, 1.1 + Math.sin(pitch) * dist, Math.cos(yaw) * Math.cos(pitch) * dist);
      c.lookAt(0, 1.0, 0);
      H.ring.rotation.z += dt * 0.2; H.ring2.rotation.z -= dt * 0.3;
    };
    app.setView(H.scene, H.camera, tick);

    const el = app.html(`<div class="screen design passthrough">${topbar('Design Your Rover', 1, 'briefing')}
      <div class="left glass corner"><div class="cats"></div><div class="opts scroll"></div></div>
      <div class="right glass corner"><div class="scroll" style="overflow:auto;flex:1" id="stats"></div></div>
      <div class="center-hint muted"><div class="namebig">ROVER PREVIEW</div>drag to rotate · scroll to zoom</div>
      <div class="bottom"><button class="btn" id="reset">↺ Reset</button><button class="btn mars" id="next">Plan the route ▶</button></div>
    </div>`);
    wireBack(app, el);
    const catsEl = el.querySelector('.cats'), optsEl = el.querySelector('.opts'), statsEl = el.querySelector('#stats');

    const specLine = (c, o) => {
      const s = [];
      if (o.mass) s.push(`${o.mass} kg`);
      if (o.cost) s.push(`$${o.cost}M`);
      if (c === 'chassis') s.push(`payload ${o.payload} kg`, `awake ${o.baseLoad} W`, `asleep ${o.sleepLoad} W`);
      if (c === 'wheels') s.push(`${(o.speed * 100).toFixed(1)} cm/s`, `grip ×${o.grip}`, `sand drag ×${o.sandCrr}`, `toughness ×${o.durability}`);
      if (c === 'solar' && o.area) s.push(`${o.area} m²`);
      if (c === 'rtg' && o.power) s.push(`${o.power} W 24/7`, 'heat');
      if (c === 'battery') s.push(`${o.capacity} Wh`);
      if (o.power && c !== 'rtg') s.push(`${o.power} W`);
      if (o.txPower) s.push(`tx ${o.txPower} W`);
      return s.map(x => `<span>${x}</span>`).join('');
    };

    const renderCats = () => {
      catsEl.innerHTML = CATEGORY_ORDER.map(c => `<button data-c="${c}" class="${c === cat ? 'on' : ''}"><span class="i">${CATALOG[c].icon}</span>${CATALOG[c].label}</button>`).join('');
    };
    const renderOpts = () => {
      const C = CATALOG[cat];
      const sel = st.design[cat];
      optsEl.innerHTML = `<p class="help">${C.help}${C.single ? '' : ' <b>Select any number.</b>'}</p>` + C.options.map(o => {
        const on = C.single ? sel === o.id : sel.includes(o.id);
        return `<div class="opt ${on ? 'on' : ''}" data-id="${o.id}"><div class="t"><span>${C.single ? '' : `<span class="ck">${on ? '✓' : ''}</span>`}${o.name}${o.doc ? '<span class="doc">REAL</span>' : ''}</span></div>
          <div class="d">${o.desc}</div><div class="specs">${specLine(cat, o)}</div></div>`;
      }).join('');
    };
    const meter = (v, max, cls = '') => `<div class="meter ${cls}"><i style="width:${Math.max(2, Math.min(100, v / max * 100))}%"></i></div>`;
    const renderStats = () => {
      const s = computeStats(st.design);
      const caps = capabilities(st.design);
      const tcov = MISSION.targets.map(t => {
        const ok = t.tasks.filter(k => k.needs.every(n => hasNeed(caps, n))).length;
        return `<div class="stat"><div class="l"><span>${t.id} ${t.name}</span><b style="color:${ok === t.tasks.length ? 'var(--ok)' : ok ? 'var(--warn)' : 'var(--err)'}">${ok}/${t.tasks.length} tasks</b></div></div>`;
      }).join('');
      statsEl.innerHTML = `
        <div class="sec-h">MASS &amp; BUDGET</div>
        <div class="stat"><div class="l"><span>Total mass</span><b>${fmt(s.mass)} kg</b></div>${meter(s.mass, 1000)}<div class="l" style="margin-top:4px"><span>Weight on Mars (m·g)</span><b>${fmt(s.weight)} N</b></div></div>
        <div class="stat"><div class="l"><span>Payload used</span><b>${fmt(s.payloadMass, 1)} / ${s.payloadCap} kg</b></div>${meter(s.payloadMass, s.payloadCap, s.payloadMass > s.payloadCap ? 'err' : s.payloadMass > s.payloadCap * 0.85 ? 'warn' : '')}</div>
        <div class="stat"><div class="l"><span>Hardware cost</span><b>$${s.cost}M / $${s.budget}M</b></div>${meter(s.cost, s.budget, s.cost > s.budget ? 'err' : s.cost > s.budget * 0.9 ? 'warn' : '')}</div>
        <div class="sec-h">POWER</div>
        <div class="stat"><div class="l"><span>Solar @ noon (clear / dusty)</span><b>${fmt(s.solarNoon)} / ${fmt(s.solarStorm)} W</b></div>
          <div class="l"><span>RTG (day &amp; night)</span><b>${fmt(s.rtgPower)} W</b></div>
          <div class="l"><span>Avg generation 09:00–17:30</span><b>${fmt(s.avgGen)} W</b></div>${meter(s.avgGen, Math.max(s.avgGen, s.driveLoad) * 1.1)}</div>
        <div class="stat"><div class="l"><span>Load: awake / driving</span><b>${fmt(s.idleLoad)} / ${fmt(s.driveLoad)} W</b></div>${meter(s.driveLoad, Math.max(s.avgGen, s.driveLoad) * 1.1, s.driveLoad > s.avgGen + s.battery / 8 ? 'warn' : '')}
          <div class="l" style="margin-top:4px"><span>…of which rolling resistance</span><b>${fmt(s.driveMech, 1)} W</b></div></div>
        <div class="stat"><div class="l"><span>Battery</span><b>${s.battery} Wh</b></div>
          <div class="l"><span>Night energy need (sleep ${s.sleepLoad} W + heaters)</span><b style="color:${s.nightNeed > s.battery * 0.7 ? 'var(--err)' : 'inherit'}">${fmt(Math.max(0, s.nightNeed))} Wh</b></div>${meter(Math.max(0, s.nightNeed), s.battery, s.nightNeed > s.battery * 0.7 ? 'err' : '')}</div>
        <div class="sec-h">MOBILITY</div>
        <div class="stat"><div class="l"><span>Top speed</span><b>${fmt(s.topSpeed * 100, 1)} cm/s · ${fmt(s.topSpeed * 3600)} m/h</b></div>
          <div class="l"><span>Max slope: sand / gravel / bedrock</span><b>${fmt(s.maxSlope.sand)}° / ${fmt(s.maxSlope.gravel)}° / ${fmt(s.maxSlope.bedrock)}°</b></div>${meter(s.maxSlope.sand, 30, s.maxSlope.sand < 12 ? 'err' : '')}
          <div class="l" style="margin-top:4px"><span>Wheel toughness${s.hazcam ? ' (+hazcam)' : ''}</span><b>×${s.durability}${s.hazcam ? ' ×2.2' : ''}</b></div>
          <div class="l"><span>Driving range on battery (gravel)</span><b>${isFinite(s.rangeKm) ? fmt(s.rangeKm, 2) + ' km' : 'unlimited in daylight'}</b></div></div>
        <div class="sec-h">SCIENCE COVERAGE · ${s.scienceAvail}/${s.scienceMax} pts</div>${tcov}
        <div class="sec-h">ENGINEERING CHECKS</div>
        <div class="issues">${s.issues.length ? s.issues.map(i => `<div class="issue ${i.lvl}">${i.lvl === 'err' ? '✖' : i.lvl === 'warn' ? '⚠' : 'ℹ'} ${i.msg}</div>`).join('') : '<div class="issue info">✔ No problems detected</div>'}</div>`;
      el.querySelector('#next').disabled = !s.valid;
    };
    const refresh = () => { renderCats(); renderOpts(); renderStats(); };
    refresh();

    catsEl.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; cat = b.dataset.c; refresh(); });
    optsEl.addEventListener('click', e => {
      const o = e.target.closest('.opt'); if (!o) return;
      const C = CATALOG[cat];
      if (C.single) st.design[cat] = o.dataset.id;
      else { const a = st.design[cat]; const i = a.indexOf(o.dataset.id); i >= 0 ? a.splice(i, 1) : a.push(o.dataset.id); }
      sfx.select(); rebuild(); refresh();
    });
    el.querySelector('#reset').onclick = () => { st.design = { chassis: 'medium', wheels: 'std', solar: 's4', rtg: 'none', battery: 'b12', cameras: ['navcam'], instruments: ['rems'], comms: 'uhf', arm: 'scoop' }; rebuild(); refresh(); };
    el.querySelector('#next').onclick = () => app.go('planning');

    // camera orbit
    const cv = app.renderer.domElement;
    this._down = e => { if (e.target !== cv && !e.target.classList.contains('passthrough')) return; drag = { x: e.clientX, y: e.clientY }; auto = false; };
    this._move = e => { if (!drag) return; yaw -= (e.clientX - drag.x) * 0.006; pitch = Math.max(0.02, Math.min(1.2, pitch + (e.clientY - drag.y) * 0.004)); drag = { x: e.clientX, y: e.clientY }; };
    this._up = () => { drag = null; };
    this._wheel = e => { if (e.target.closest('.glass')) return; dist = Math.max(4, Math.min(16, dist + e.deltaY * 0.005)); };
    addEventListener('pointerdown', this._down); addEventListener('pointermove', this._move); addEventListener('pointerup', this._up); addEventListener('wheel', this._wheel);
  },
  exit() {
    removeEventListener('pointerdown', this._down); removeEventListener('pointermove', this._move); removeEventListener('pointerup', this._up); removeEventListener('wheel', this._wheel);
  },
};
