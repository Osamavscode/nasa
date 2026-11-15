import { GAME, SOURCES } from '../data.js';
import { getBackdrop, topbar, wireBack } from './common.js';
import { startMusic, stopMusic, sfx } from '../audio.js';

export const menu = {
  enter(app) {
    const bd = getBackdrop();
    app.setView(bd.scene, bd.camera, bd.tick);
    startMusic();
    const el = app.html(`<div class="screen menu">
      <div>
        <div class="logo"><div class="mark"></div>
          <h1>${GAME.title}</h1><div class="sub">${GAME.subtitle.toUpperCase()}</div>
          <div class="tag">${GAME.tagline}</div></div>
        <nav>
          <button class="btn primary" data-a="play"><span class="ic">▶</span> Play</button>
          <button class="btn" data-a="settings"><span class="ic">⚙</span> Settings</button>
          <button class="btn" data-a="credits"><span class="ic">★</span> Credits</button>
          <button class="btn" data-a="exit"><span class="ic">⏻</span> Exit</button>
        </nav>
      </div>
      <div class="ver muted">${GAME.version}</div>
      <div class="ver2 muted">Built with real Mars mission data<br>Curiosity · REMS · RAD · MMRTG</div>
    </div>`);
    el.querySelector('[data-a=play]').onclick = () => app.go('missions');
    el.querySelector('[data-a=settings]').onclick = () => app.go('settings', { back: 'menu' });
    el.querySelector('[data-a=credits]').onclick = () => app.go('credits');
    el.querySelector('[data-a=exit]').onclick = () => {
      if (window.desktop?.quit) window.desktop.quit();
      else { window.close(); setTimeout(() => alert('You can close this browser tab to exit.'), 200); }
    };
  },
  exit() {},
};

export const settings = {
  enter(app, params = {}) {
    const bd = getBackdrop(); app.setView(bd.scene, bd.camera, bd.tick);
    const s = app.settings;
    const seg = (key, vals) => `<div class="seg" data-k="${key}">${vals.map(([v, l]) => `<button data-v="${v}" class="${String(s[key]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
    const rng = (key, min, max, step) => `<div class="row"><input type="range" data-k="${key}" min="${min}" max="${max}" step="${step}" value="${s[key]}"><span class="mono" data-o="${key}">${Math.round(s[key] * 100)}%</span></div>`;
    const el = app.html(`<div class="screen">${topbar('Settings', null, params.back || 'menu')}
      <div class="page glass" style="width:min(760px,92vw)">
        <div class="hd" style="font-size:12px;color:var(--neon);margin-bottom:6px">GRAPHICS</div>
        <div class="set-row"><span>Quality</span>${seg('quality', [['low', 'Low'], ['medium', 'Medium'], ['high', 'High']])}</div>
        <div class="set-row"><span>Resolution scale</span>${seg('resScale', [[0.75, '75%'], [1, '100%']])}</div>
        <div class="set-row"><span>Show FPS</span>${seg('showFps', [[false, 'Off'], [true, 'On']])}</div>
        <div class="hd" style="font-size:12px;color:var(--neon);margin:22px 0 6px">AUDIO</div>
        <div class="set-row"><span>Master volume</span>${rng('master', 0, 1, 0.05)}</div>
        <div class="set-row"><span>Effects</span>${rng('sfx', 0, 1, 0.05)}</div>
        <div class="set-row"><span>Music</span>${rng('music', 0, 1, 0.05)}</div>
        <div class="hd" style="font-size:12px;color:var(--neon);margin:22px 0 6px">CONTROLS</div>
        <div class="set-row"><span>Mouse sensitivity</span>${rng('sensitivity', 0.3, 2, 0.1)}</div>
        <div class="set-row"><span>Invert camera Y</span>${seg('invertY', [[false, 'Off'], [true, 'On']])}</div>
        <div class="set-row" style="align-items:start"><span>Key bindings</span><div class="col" style="gap:7px;font-size:13px">
          <div><span class="kbd">W A S D</span> / arrows — drive &amp; steer (turn in place)</div>
          <div><span class="kbd">Space</span> brake · <span class="kbd">R</span> AutoNav along your route</div>
          <div><span class="kbd">E</span> science at a target · <span class="kbd">Tab</span> data dashboard</div>
          <div><span class="kbd">C</span> Navcam view · <span class="kbd">M</span> map · <span class="kbd">T</span> time warp</div>
          <div><span class="kbd">Right-drag</span> orbit camera · <span class="kbd">Wheel</span> zoom · <span class="kbd">Esc</span> pause</div>
        </div></div>
      </div></div>`);
    wireBack(app, el);
    el.querySelectorAll('.seg').forEach(sg => sg.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      sg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      const v = b.dataset.v; s[sg.dataset.k] = v === 'true' ? true : v === 'false' ? false : isNaN(+v) ? v : +v;
      app.saveSettings();
    }));
    el.querySelectorAll('input[type=range]').forEach(r => r.addEventListener('input', () => {
      s[r.dataset.k] = +r.value; el.querySelector(`[data-o=${r.dataset.k}]`).textContent = Math.round(r.value * 100) + '%';
      app.saveSettings(); if (r.dataset.k !== 'sensitivity') sfx.hover();
    }));
  },
};

export const credits = {
  enter(app) {
    const bd = getBackdrop(); app.setView(bd.scene, bd.camera, bd.tick);
    const el = app.html(`<div class="screen">${topbar('Credits', null, 'menu')}
      <div class="page glass">
        <div class="grid2">
          <div>
            <h3 style="font-size:14px;color:var(--neon);margin-bottom:10px">TEAM</h3>
            <p style="line-height:1.7">${GAME.title} — ${GAME.subtitle}<br>Made for the <b>NASA International Space Apps Challenge</b>.<br><span class="muted">Team members: add your names here (src/screens/menu.js).</span></p>
            <h3 style="font-size:14px;color:var(--neon);margin:22px 0 10px">BUILT WITH</h3>
            <p class="muted" style="line-height:1.7">Three.js (MIT) · Electron (MIT) · Orbitron, Exo 2 &amp; JetBrains Mono fonts (SIL OFL)<br>
            Rover 3D model: Mars Curiosity rover model supplied by the team — please credit its original author per its licence.</p>
            <h3 style="font-size:14px;color:var(--neon);margin:22px 0 10px">DISCLAIMER</h3>
            <p class="muted" style="line-height:1.7">Educational fan project. Not affiliated with or endorsed by NASA. Mission data are simplified for gameplay; values marked <span class="doc">DATA</span> come from published sources.</p>
          </div>
          <div>
            <h3 style="font-size:14px;color:var(--neon);margin-bottom:10px">SCIENTIFIC DATA SOURCES</h3>
            ${SOURCES.map(([a, b]) => `<div style="padding:8px 0;border-bottom:1px solid rgba(80,170,255,.12)"><div style="font-size:13px">${a}</div><div class="muted" style="font-size:12px;margin-top:2px">${b}</div></div>`).join('')}
          </div>
        </div>
      </div></div>`);
    wireBack(app, el);
  },
};
