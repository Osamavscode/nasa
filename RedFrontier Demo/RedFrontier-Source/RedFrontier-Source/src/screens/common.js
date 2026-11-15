import * as THREE from 'three';
import { fbm } from '../terrain.js';

const STEPS = ['Briefing', 'Design', 'Plan', 'Mission', 'Results'];
export function topbar(title, step, back) {
  const steps = step == null ? '' : `<div class="steps">${STEPS.map((s, i) => `<span class="${i === step ? 'on' : i < step ? 'done' : ''}">${i + 1}. ${s}</span>`).join('')}</div>`;
  return `<div class="topbar glass corner">
    ${back ? `<button class="btn iconbtn ghost" data-back="${back}" title="Back">←</button>` : '<div style="width:44px"></div>'}
    <h2>${title}</h2>${steps}</div>`;
}
export function wireBack(app, root) {
  root.querySelectorAll('[data-back]').forEach(b => b.addEventListener('click', () => app.go(b.dataset.back)));
}
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------------------------------------------------------------- space backdrop
let backdrop = null;
function marsTexture() {
  const w = 1024, h = 512, c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'), img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const lon = x / w * Math.PI * 2, lat = (y / h - 0.5) * Math.PI;
    const px = Math.cos(lat) * Math.cos(lon), py = Math.sin(lat), pz = Math.cos(lat) * Math.sin(lon);
    const n = fbm(px * 3 + 10, pz * 3 + py * 2.3, 6, 5);
    const n2 = fbm(px * 9 + py * 4, pz * 9, 4, 8);
    const crater = Math.abs(fbm(px * 14, pz * 14 + py * 9, 3, 12));
    let r = 0.72 + n * 0.3 - crater * 0.1, gg = 0.36 + n * 0.16 - crater * 0.06, b = 0.2 + n * 0.08;
    if (n2 > 0.25) { r *= 0.7; gg *= 0.65; b *= 0.7; }
    const pole = Math.abs(py) > 0.93 ? (Math.abs(py) - 0.93) * 14 : 0;
    r = r * (1 - pole) + pole; gg = gg * (1 - pole) + pole * 0.95; b = b * (1 - pole) + pole * 0.95;
    const o = (y * w + x) * 4; img.data[o] = r * 255; img.data[o + 1] = gg * 255; img.data[o + 2] = b * 255; img.data[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function getBackdrop() {
  if (backdrop) return backdrop;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 2000);
  camera.position.set(0, 0, 9);
  // stars
  const n = 4000, pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(400 + Math.random() * 400);
    pos.set([v.x, v.y, v.z], i * 3);
    const c = 0.6 + Math.random() * 0.4, tint = Math.random();
    col.set([c * (tint > 0.8 ? 1 : 0.85), c * 0.9, c * (tint < 0.3 ? 1 : 0.95)], i * 3);
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setAttribute('color', new THREE.BufferAttribute(col, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 1.4, vertexColors: true, sizeAttenuation: false })));
  // mars
  const mars = new THREE.Mesh(new THREE.SphereGeometry(3, 96, 64), new THREE.MeshStandardMaterial({ map: marsTexture(), roughness: 1 }));
  mars.position.set(3.2, -0.6, 0); mars.rotation.z = 0.44; scene.add(mars);
  const atm = new THREE.Mesh(new THREE.SphereGeometry(3.12, 64, 48), new THREE.ShaderMaterial({
    transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
    vertexShader: 'varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = (modelViewMatrix*vec4(position,1.)).xyz; gl_Position = projectionMatrix*vec4(vP,1.);}',
    fragmentShader: 'varying vec3 vN; varying vec3 vP; void main(){ float f = pow(0.75 - dot(vN, normalize(-vP)), 3.0); gl_FragColor = vec4(1.0,0.55,0.3,1.0)*f*1.6; }',
  }));
  atm.position.copy(mars.position); scene.add(atm);
  // satellite
  const sat = new THREE.Group();
  const bus = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.18), new THREE.MeshStandardMaterial({ color: 0xd8c27a, metalness: 0.8, roughness: 0.3 }));
  const pm = new THREE.MeshStandardMaterial({ color: 0x1a3d8f, metalness: 0.6, roughness: 0.3, emissive: 0x050f30 });
  const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.01, 0.14), pm); p1.position.x = 0.32;
  const p2 = p1.clone(); p2.position.x = -0.32;
  const dish = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.05, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
  dish.position.z = 0.12; dish.rotation.x = Math.PI / 2;
  sat.add(bus, p1, p2, dish); scene.add(sat);
  const sun = new THREE.DirectionalLight(0xffffff, 3.2); sun.position.set(-6, 3, 5); scene.add(sun);
  scene.add(new THREE.AmbientLight(0x223355, 0.4));
  let t = 0;
  const tick = (dt) => {
    t += dt;
    mars.rotation.y += dt * 0.03;
    sat.position.set(3.2 + Math.cos(t * 0.25) * 4.2, -0.6 + Math.sin(t * 0.25) * 1.2, Math.sin(t * 0.25) * 3.2);
    sat.rotation.y = t * 0.2; sat.rotation.x = t * 0.1;
    camera.position.x = Math.sin(t * 0.05) * 0.3;
    camera.lookAt(0.6, 0, 0);
  };
  backdrop = { scene, camera, tick, mars };
  return backdrop;
}

// ---------------------------------------------------------------- simple canvas charts
export function lineChart(canvas, series, opts = {}) {
  const dpr = Math.min(2, devicePixelRatio || 1);
  const W = canvas.clientWidth || 400, H = canvas.clientHeight || 170;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const g = canvas.getContext('2d'); g.scale(dpr, dpr);
  const pad = { l: 44, r: 10, t: 22, b: 22 };
  const xs = series.flatMap(s => s.data.map(p => p[0])), ys = series.flatMap(s => s.data.map(p => p[1]));
  if (xs.length < 2) { g.fillStyle = '#8296c2'; g.font = '12px sans-serif'; g.fillText('Collecting data…', W / 2 - 40, H / 2); if (opts.title) { g.fillStyle = '#3fd0ff'; g.font = '600 11px Orbitron, sans-serif'; g.fillText(opts.title, 44, 13); } return; }
  let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = opts.yMin ?? Math.min(...ys), y1 = opts.yMax ?? Math.max(...ys);
  if (y1 - y0 < 1e-6) { y1 += 1; y0 -= 1; } if (x1 - x0 < 1e-6) x1 += 1;
  const X = x => pad.l + (x - x0) / (x1 - x0) * (W - pad.l - pad.r), Y = y => H - pad.b - (y - y0) / (y1 - y0) * (H - pad.t - pad.b);
  g.strokeStyle = 'rgba(80,170,255,.15)'; g.fillStyle = '#8296c2'; g.font = '10px JetBrains Mono, monospace'; g.lineWidth = 1;
  for (let i = 0; i <= 4; i++) { const v = y0 + (y1 - y0) * i / 4, y = Y(v); g.beginPath(); g.moveTo(pad.l, y); g.lineTo(W - pad.r, y); g.stroke(); g.fillText(v.toFixed(Math.abs(y1 - y0) < 10 ? 1 : 0), 2, y + 3); }
  for (let i = 0; i <= 4; i++) { const v = x0 + (x1 - x0) * i / 4, t = opts.xfmt ? opts.xfmt(v) : v.toFixed(1), tw = g.measureText(t).width; g.fillText(t, Math.min(W - pad.r - tw, Math.max(pad.l, X(v) - tw / 2)), H - 6); }
  if (opts.title) { g.fillStyle = '#3fd0ff'; g.font = '600 11px Orbitron, sans-serif'; g.fillText(opts.title, pad.l, 13); }
  let lx = W - pad.r;
  for (const s of [...series].reverse()) { g.font = '10px sans-serif'; const w = g.measureText(s.name).width; lx -= w + 22; g.fillStyle = s.color; g.fillRect(lx, 6, 10, 3); g.fillStyle = '#c6d4f3'; g.fillText(s.name, lx + 14, 11); }
  for (const s of series) {
    g.strokeStyle = s.color; g.lineWidth = 1.8; g.beginPath();
    s.data.forEach((p, i) => i ? g.lineTo(X(p[0]), Y(p[1])) : g.moveTo(X(p[0]), Y(p[1]))); g.stroke();
    if (s.fill) { g.lineTo(X(s.data.at(-1)[0]), Y(y0)); g.lineTo(X(s.data[0][0]), Y(y0)); g.closePath(); g.fillStyle = s.fill; g.fill(); }
  }
}
