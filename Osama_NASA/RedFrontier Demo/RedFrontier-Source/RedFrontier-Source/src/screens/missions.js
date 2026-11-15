import { MISSIONS_MENU, MISSION, MARS } from '../data.js';
import { getBackdrop, topbar, wireBack } from './common.js';
import { airTemp, pressurePa, irradiance, dustTau } from '../physics.js';
import { renderMapPixels, worldToMap } from '../mapRender.js';
import { sfx } from '../audio.js';

export const missions = {
  enter(app) {
    const bd = getBackdrop(); app.setView(bd.scene, bd.camera, bd.tick);
    const el = app.html(`<div class="screen">${topbar('Select Your Mission', null, 'menu')}
      <div class="mcards">${MISSIONS_MENU.map(m => `
        <div class="mcard glass ${m.locked ? 'locked' : ''}" data-id="${m.id}">
          <div class="art"><div class="planet ${m.planet}"></div>${m.locked ? '<span class="chip lockbadge">🔒 COMING IN v2</span>' : '<span class="chip lockbadge" style="color:var(--ok);border-color:var(--ok)">PLAYABLE</span>'}</div>
          <div class="body"><h3>${m.name}</h3><div class="muted" style="font-size:13px;line-height:1.5;min-height:40px">${m.desc}</div>
            <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">${m.skills.map(s => `<span class="chip">${s}</span>`).join('')}</div>
            <div class="diff"><span class="chip d-${m.diff}">★ ${m.diff.toUpperCase()}</span>${m.locked ? '' : '<button class="btn primary small">Select ▶</button>'}</div>
          </div></div>`).join('')}
      </div></div>`);
    wireBack(app, el);
    el.querySelectorAll('.mcard').forEach(c => c.addEventListener('click', () => {
      if (c.classList.contains('locked')) { sfx.error(); return; }
      app.go('briefing');
    }));
  },
};

let mapURL = null;
export function mapDataURL() {
  if (mapURL) return mapURL;
  const n = 512, c = document.createElement('canvas'); c.width = c.height = n;
  const g = c.getContext('2d'); g.putImageData(new ImageData(renderMapPixels(n), n, n), 0, 0);
  mapURL = c.toDataURL(); return mapURL;
}
export function drawTargets(g, n, scale = 1) {
  const [lx, lz] = worldToMap(MISSION.landing.x, MISSION.landing.z, n);
  g.save();
  g.fillStyle = '#3fd0ff'; g.strokeStyle = '#fff'; g.lineWidth = 2 * scale;
  g.beginPath(); g.moveTo(lx, lz - 9 * scale); g.lineTo(lx + 8 * scale, lz + 6 * scale); g.lineTo(lx - 8 * scale, lz + 6 * scale); g.closePath(); g.fill(); g.stroke();
  g.font = `600 ${11 * scale}px Orbitron, sans-serif`; g.fillStyle = '#fff'; g.fillText('LANDING', lx + 12 * scale, lz + 4 * scale);
  for (const t of MISSION.targets) {
    const [x, z] = worldToMap(t.x, t.z, n);
    g.strokeStyle = '#ffb067'; g.lineWidth = 2.5 * scale; g.beginPath(); g.arc(x, z, 10 * scale, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#ffb067'; g.beginPath(); g.arc(x, z, 3.5 * scale, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fff'; g.shadowColor = '#000'; g.shadowBlur = 4;
    g.fillText(`${t.id} ${t.name}`, x + 14 * scale, z + 4 * scale); g.shadowBlur = 0;
  }
  g.restore();
}

export const briefing = {
  enter(app) {
    const bd = getBackdrop(); app.setView(bd.scene, bd.camera, bd.tick);
    const env = [
      ['Surface gravity', `${MARS.g} m/s² (38% of Earth)`, true],
      ['Sol (Mars day)', '24 h 39 min', true],
      ['Air temperature', `${MARS.airTempMinC} °C pre-dawn → +${MARS.airTempMaxC} °C afternoon`, true],
      ['Air pressure', `${MARS.pressureMinPa}–${MARS.pressureMaxPa} Pa (≈0.7% of Earth)`, true],
      ['Radiation at surface', `${MARS.radiation_mSv_day} mSv/day`, true],
      ['Sunlight at Mars orbit', `${MARS.solarConstant} W/m² (43% of Earth)`, true],
      ['Noon sunlight, clear (τ 0.6)', `${irradiance(12, 0.6).toFixed(0)} W/m² on the ground`, false],
      ['Noon sunlight, dusty (τ 1.6)', `${irradiance(12, 1.6).toFixed(0)} W/m² on the ground`, false],
    ];
    const el = app.html(`<div class="screen">${topbar('Mission Briefing', 0, 'missions')}
      <div class="page glass corner">
        <div class="brief">
          <div>
            <div class="chip" style="color:var(--mars2);border-color:var(--mars2);display:inline-block">MISSION DIRECTIVE · ${MISSION.name.toUpperCase()}</div>
            <h1 style="font-size:28px;margin:12px 0 4px">Mars Exploration</h1>
            <div class="muted" style="font-size:13px">${MISSION.site}</div>
            <p>The mission team needs a rover that can land in Gale Crater, cross <b>${MISSION.sols} sols</b> of Martian terrain and return data from four science sites that tell the story of water on ancient Mars.</p>
            <p>You are the lead engineer. <b>You</b> choose every part. Every kilogram, watt and dollar has a cost — there is no perfect rover, only good trade-offs.</p>
            <h3>OBJECTIVES</h3>
            ${MISSION.targets.map(t => `<div class="target-li"><b>${t.id}</b><div><div style="font-weight:600">${t.name} <span class="muted" style="font-weight:400">— ${t.kind}</span></div><div class="muted" style="font-size:12.5px">${t.blurb} Tasks: ${t.tasks.map(k => k.label).join(' · ')}</div></div></div>`).join('')}
            <h3>CHALLENGES</h3>
            <ul>
              <li><b>Power:</b> the rover needs ≥ its idle load all day, and must survive ${MISSION.sols - 1} nights at −70 °C.</li>
              <li><b>Dust forecast:</b> a regional dust event begins sol 1 ~13:00 — optical depth τ rises 0.6 → 1.6, cutting sunlight.</li>
              <li><b>Terrain:</b> loose sand at the dunes, sharp rock fields (wheel damage!), and slopes up to ~25° on the ridge and crater rim.</li>
              <li><b>Communication:</b> science only counts once it reaches Earth — orbiter relay passes at 11:30 &amp; 16:00 daily.</li>
              <li><b>Budget:</b> $900M hardware cap and each chassis has a payload limit.</li>
            </ul>
          </div>
          <div>
            <img class="mapthumb" id="mt">
            <div class="muted" style="font-size:11px;margin:6px 0 14px;text-align:center">Orbital map of the landing region (1 km × 1 km) · north is up</div>
            <h3 style="margin-top:0">ENVIRONMENT AT GALE CRATER</h3>
            <table class="envtable">${env.map(([a, b, d]) => `<tr><td>${a}${d ? '<span class="doc">DATA</span>' : ''}</td><td>${b}</td></tr>`).join('')}</table>
            <div style="display:flex;justify-content:flex-end;margin-top:22px"><button class="btn mars" id="go">Design the rover ▶</button></div>
          </div>
        </div>
      </div></div>`);
    wireBack(app, el);
    // map thumbnail with targets
    const img = el.querySelector('#mt');
    const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d');
    const base = new Image(); base.onload = () => { g.drawImage(base, 0, 0); drawTargets(g, 512); img.src = c.toDataURL(); }; base.src = mapDataURL();
    el.querySelector('#go').onclick = () => app.go('design');
  },
};
