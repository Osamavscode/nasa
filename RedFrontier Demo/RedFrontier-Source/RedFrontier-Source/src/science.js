// Science measurement results — representative values based on published MSL results
import { MARS } from './data.js';
import { airTemp, pressurePa, dustTau, fmtHour, solOf, irradiance } from './physics.js';

// Representative oxide compositions (wt%) — after MSL APXS/ChemCam results
// (John Klein mudstone; Rocknest/Bagnold basaltic sand; Vera Rubin ridge, Fe-enriched)
const COMPOSITION = {
  T1: { SiO2: 41.1, FeOT: 20.1, Al2O3: 8.5, MgO: 9.3, CaO: 7.0, Na2O: 3.0, SO3: 5.6, TiO2: 1.1 },
  T2: { SiO2: 42.9, FeOT: 19.2, Al2O3: 9.4, MgO: 8.7, CaO: 7.3, Na2O: 2.7, SO3: 5.5, TiO2: 1.2 },
  T3: { SiO2: 44.2, FeOT: 22.4, Al2O3: 8.9, MgO: 6.1, CaO: 5.8, Na2O: 2.5, SO3: 4.7, TiO2: 1.0 },
  T4: { SiO2: 45.5, FeOT: 18.0, Al2O3: 10.2, MgO: 7.5, CaO: 6.6, Na2O: 3.1, SO3: 3.9, TiO2: 1.0 },
};
let seed = 7;
const jitter = (v, pct) => { seed = (seed * 9301 + 49297) % 233280; return v * (1 + (seed / 233280 - 0.5) * 2 * pct); };

function compHtml(c) {
  return Object.entries(c).map(([k, v]) => `<div class="comp"><span style="width:44px">${k}</span><i style="width:${v * 2.4}px"></i><span>${v.toFixed(1)}%</span></div>`).join('');
}

export function scienceResult(tg, tk, caps, S) {
  const t = S.t;
  let points = tk.points, dataMb = tk.dataMb, instrument = '', summary = '', detail = '', html = '';
  switch (tk.id) {
    case 'img': {
      const color = caps.has('mastcam');
      instrument = color ? 'Mastcam' : 'Navcam';
      if (!color) { points = Math.round(points * 0.5); dataMb = Math.round(dataMb * 0.4); }
      const frames = color ? 24 : 8;
      summary = `${frames} ${color ? 'colour' : 'B/W'} frames`;
      detail = `${frames} ${color ? 'colour zoom (Mastcam)' : 'black-and-white stereo (Navcam)'} images of ${tg.name}.\n` +
        (tg.id === 'T1' ? 'Visible: thin, flat layers 1–5 mm thick — typical of fine mud settling in still lake water.' :
          'Visible: ripple crests ~1–3 m apart, oriented by the prevailing wind.') + (color ? '' : '\n(Navcam only: half science value — colour imaging needs Mastcam.)');
      break;
    }
    case 'pano': {
      instrument = 'Mastcam';
      summary = '142-frame 360° colour mosaic';
      detail = `142-frame colour panorama from the rim at ${fmtHour(t)}.\nAeolis Mons (Mount Sharp, ~5.5 km tall) dominates the southern horizon; layered sediments visible on its lower slopes.\nAtmospheric optical depth τ ≈ ${dustTau(t).toFixed(2)} (estimated from sky brightness).`;
      break;
    }
    case 'chem': {
      const chem = caps.has('chemcam');
      instrument = chem ? 'ChemCam (LIBS)' : 'APXS (arm)';
      const c = Object.fromEntries(Object.entries(COMPOSITION[tg.id]).map(([k, v]) => [k, +jitter(v, chem ? 0.06 : 0.03).toFixed(1)]));
      summary = `SiO₂ ${c.SiO2}% · FeOT ${c.FeOT}% · MgO ${c.MgO}%`;
      detail = `${chem ? '30 laser shots at 3.2 m distance' : 'APXS contact measurement, 20 min integration'} → oxide wt%:\n` +
        Object.entries(c).map(([k, v]) => `${k.padEnd(6)} ${v.toFixed(1)}%`).join('   ') +
        `\nInterpretation: ${tg.id === 'T3' ? 'iron enrichment consistent with hematite deposited by groundwater.' : tg.id === 'T1' ? 'basaltic composition, altered by water — elevated sulfur in veins.' : 'basaltic material similar to the average Martian crust.'}`;
      html = compHtml(c);
      break;
    }
    case 'core': {
      instrument = 'Drill + onboard lab';
      summary = '6.4 cm core · ~20% smectite clay';
      detail = 'Drilled 6.4 cm deep, 1.6 cm wide hole. Powder delivered to onboard X-ray diffraction lab:\n~20% smectite clay, plagioclase feldspar, pyroxene, magnetite, minor sulfates.\nInterpretation: the lake water was fresh and pH-neutral — this environment could once have supported microbial life.';
      break;
    }
    case 'scoop': {
      instrument = 'Scoop arm';
      summary = 'Basaltic sand, grains ~150 µm';
      detail = 'Scooped ~45 cm³ of dune sand, sieved to < 1 mm.\nDark basaltic sand with olivine; median grain size ~150 µm; very little dust (actively moved by wind).';
      break;
    }
    case 'wx': {
      instrument = 'REMS-type weather station';
      const T = jitter(airTemp(t), 0.03), P = jitter(pressurePa(t), 0.01), w = Math.abs(jitter(5, 0.6));
      summary = `${T.toFixed(1)} °C · ${P.toFixed(0)} Pa · wind ${w.toFixed(1)} m/s`;
      detail = `Sol ${solOf(t)} ${fmtHour(t)} — air temperature ${T.toFixed(1)} °C, pressure ${P.toFixed(0)} Pa, wind ${w.toFixed(1)} m/s, relative humidity < 5%, UV flux ${(irradiance(t) * 0.04).toFixed(1)} W/m².\nFor comparison: Earth sea-level pressure is 101,325 Pa (~${(101325 / P).toFixed(0)}× more).`;
      break;
    }
    case 'rad': {
      instrument = 'RAD-type detector';
      const dose = jitter(MARS.radiation_mGy_day * 1000 / 24, 0.08), eq = jitter(MARS.radiation_mSv_day * 1000 / 24, 0.08);
      summary = `${dose.toFixed(1)} µGy/h · ${eq.toFixed(1)} µSv/h`;
      detail = `Absorbed dose rate ${dose.toFixed(1)} µGy/h (tissue), dose equivalent ${eq.toFixed(1)} µSv/h → ≈${(eq * 24 / 1000).toFixed(2)} mSv per sol.\nMostly galactic cosmic rays. A 500-sol stay would give ~${(eq * 24 * 500 / 1000).toFixed(0)} mSv — important data for future astronauts.\n(Reference: Curiosity RAD measured 0.64 mSv/day.)`;
      break;
    }
    case 'h2o': {
      const dan = caps.has('dan');
      instrument = dan ? 'DAN neutron detector' : 'Ground radar';
      const weh = jitter(tg.id === 'T3' ? 3.1 : 2.4, 0.1);
      summary = dan ? `${weh.toFixed(1)} wt% water-equivalent hydrogen` : 'Layered reflectors at 2.1, 4.8, 7.5 m';
      detail = dan ? `Active neutron pulses: ${weh.toFixed(1)} wt% water-equivalent hydrogen in the top ~60 cm.\nWater is locked in hydrated minerals — evidence that water once soaked this rock.`
        : 'Radar section to 10 m depth: three dipping reflectors at ~2.1, 4.8 and 7.5 m — stacked sedimentary layers deposited by water.\n(Radar shows structure, but not water content — a neutron detector would measure hydrogen.)';
      if (!dan) points = Math.round(points * 0.8);
      break;
    }
  }
  return { points, dataMb, instrument, summary, detail, html };
}
