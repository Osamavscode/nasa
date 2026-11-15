// ============================================================================
//  RED FRONTIER — app shell: renderer, screen router, settings, main loop
// ============================================================================
import * as THREE from 'three';
import { DEFAULT_DESIGN } from './data.js';
import { loadRover } from './rover.js';
import { resume, applyVolumes, audioSettings, sfx } from './audio.js';
import { screens } from './screens/index.js';

const defaults = { quality: 'medium', resScale: 1, master: 0.7, sfx: 0.8, music: 0.5, sensitivity: 1, invertY: false, showFps: false, units: 'metric' };
function loadSettings() { try { return { ...defaults, ...JSON.parse(localStorage.getItem('rf-settings') || '{}') }; } catch { return { ...defaults }; } }

export const app = {
  settings: loadSettings(),
  state: { design: structuredClone(DEFAULT_DESIGN), route: null, result: null, attempts: 0 },
  renderer: null,
  ui: document.getElementById('ui'),
  current: null,
  scene: null, camera: null, tick: null,
  saveSettings() {
    try { localStorage.setItem('rf-settings', JSON.stringify(this.settings)); } catch {}
    Object.assign(audioSettings, { master: this.settings.master, sfx: this.settings.sfx, music: this.settings.music });
    applyVolumes();
    this.applyQuality();
  },
  applyQuality() {
    const pr = Math.min(window.devicePixelRatio, 2) * this.settings.resScale * (this.settings.quality === 'low' ? 0.75 : 1);
    this.renderer.setPixelRatio(pr);
    this.renderer.shadowMap.enabled = this.settings.quality !== 'low';
  },
  setView(scene, camera, tick) { this.scene = scene; this.camera = camera; this.tick = tick; },
  async go(name, params) {
    const fader = document.getElementById('fader');
    if (this.current) { fader.classList.add('on'); await new Promise(r => setTimeout(r, 300)); }
    try { this.current?.exit?.(); } catch (e) { console.error(e); }
    this.ui.innerHTML = '';
    this.setView(null, null, null);
    const S = screens[name];
    this.current = S;
    this.currentName = name;
    await S.enter(this, params);
    fader.classList.remove('on');
  },
  html(str) { const d = document.createElement('div'); d.innerHTML = str.trim(); const el = d.firstElementChild; this.ui.appendChild(el); return el; },
};
window.__app = app;

// ---------------------------------------------------------------- renderer
const canvas = document.getElementById('gl');
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
catch (e) {
  document.getElementById('ui').innerHTML = `<div class="screen loading"><div class="hd" style="font-size:24px">3D graphics unavailable</div>
    <div class="muted" style="max-width:560px;text-align:center;line-height:1.6">This game needs WebGL 2. Please update your graphics driver, or enable "hardware acceleration" in your browser settings, then restart.<br><br><span class="mono" style="font-size:11px">${e.message}</span></div></div>`;
  throw e;
}
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
app.renderer = renderer;
app.applyQuality();
Object.assign(audioSettings, { master: app.settings.master, sfx: app.settings.sfx, music: app.settings.music });

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  if (app.camera) { app.camera.aspect = window.innerWidth / window.innerHeight; app.camera.updateProjectionMatrix(); }
}
window.addEventListener('resize', resize); resize();

// global UI sounds
document.addEventListener('pointerdown', () => resume(), { once: false });
document.addEventListener('click', e => { if (e.target.closest('.btn, .opt, .cats button, .seg button, .mcard')) sfx.click(); });
document.addEventListener('mouseover', e => { const b = e.target.closest('.btn'); if (b && !b.contains(e.relatedTarget)) sfx.hover(); });

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
let fpsEl = null, frames = 0, fpsT = 0;
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), 0.1);
  try { app.tick?.(dt); } catch (e) { console.error(e); app.tick = null; }
  if (app.scene && app.camera) {
    if (app.camera.aspect !== window.innerWidth / window.innerHeight) resize();
    renderer.render(app.scene, app.camera);
  }
  frames++; fpsT += dt;
  if (fpsT > 0.5) {
    if (app.settings.showFps) { fpsEl ||= Object.assign(document.body.appendChild(document.createElement('div')), { style: 'position:fixed;bottom:4px;left:50%;font:11px monospace;color:#7f7;z-index:99' }); fpsEl.textContent = `${Math.round(frames / fpsT)} FPS`; }
    else if (fpsEl) { fpsEl.remove(); fpsEl = null; }
    frames = 0; fpsT = 0;
  }
}

// ---------------------------------------------------------------- boot
async function boot() {
  const el = app.html(`<div class="screen loading"><div class="hd" style="font-size:28px;letter-spacing:.3em">RED FRONTIER</div>
    <div class="bar"><i></i></div><div class="muted" id="lt">Loading rover model…</div></div>`);
  const bar = el.querySelector('.bar i');
  bar.style.width = '15%';
  try {
    await loadRover(p => bar.style.width = `${15 + p * 80}%`);
  } catch (e) {
    console.error(e);
    el.querySelector('#lt').textContent = 'Could not load rover model: ' + e.message;
    return;
  }
  bar.style.width = '100%';
  await new Promise(r => setTimeout(r, 250));
  app.current = { exit() {} };
  app.go('menu');
}
loop();
boot();
