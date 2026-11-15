// ============================================================================
//  DATA: Mars constants, component catalog, mission definition
//  Values marked {doc:true} come from published mission data (see SOURCES).
//  Others are engineering estimates chosen to be realistic for gameplay.
// ============================================================================

export const GAME = {
  title: 'RED FRONTIER',
  subtitle: 'Mars Mission Designer',
  tagline: 'Design it. Simulate it. Explore it. Learn from it.',
  version: 'Demo v1.0 — NASA Space Apps Challenge',
};

export const MARS = {
  g: 3.721,                 // m/s² surface gravity            [doc]
  solarConstant: 586,       // W/m² mean at Mars orbit (1.52 AU) [doc]
  solDurationH: 24.66,      // 24 h 39 min                       [doc]
  pressureMinPa: 685,       // REMS early-mission daily min     [doc]
  pressureMaxPa: 780,       // REMS early-mission daily max     [doc]
  airTempMinC: -70,         // REMS pre-dawn low (early mission) [doc]
  airTempMaxC: 6,           // REMS afternoon high (early mission)[doc]
  radiation_mSv_day: 0.64,  // RAD surface dose equivalent       [doc]
  radiation_mGy_day: 0.21,  // RAD absorbed dose (tissue)        [doc]
  latitudeDeg: -4.5,        // Gale crater                       [doc]
};

export const SOURCES = [
  ['Radiation 0.64 mSv/day, 0.21 mGy/day', 'Hassler et al. (2014), Science 343 — MSL RAD surface measurements'],
  ['Pressure 685–780 Pa daily cycle', 'Gómez-Elvira et al., REMS team (NASA/JPL & CAB, 2012)'],
  ['Air temperature −70 °C pre-dawn to +6 °C afternoon', 'REMS early-mission reports (CAB / NASA JPL, 2012)'],
  ['MMRTG 110 W electric, 45 kg, ~2,000 W thermal', 'NASA MMRTG fact sheet'],
  ['Rover loads: 45–70 W asleep, ≥150 W awake, up to 500 W driving', 'E. Lakdawalla, "The Design and Engineering of Curiosity" (2018)'],
  ['Top speed 4 cm/s, 50 cm wheels, 30° tilt limit', 'MSL rover overview (NASA/JPL)'],
  ['Mars surface gravity 3.721 m/s², solar constant ~586 W/m²', 'NASA Mars Fact Sheet (NSSDCA)'],
  ['Rock composition (SiO₂ ~41–46 %, FeO ~18–20 %) of Gale mudstone/sand', 'ChemCam / APXS results, Grotzinger et al. (2014), Science'],
  ['Subsurface water-equivalent hydrogen ~2–5 wt%', 'DAN instrument results, Mitrofanov et al. (2014)'],
  ['NASA's OPEN SOURCE DATA '] ,

];

// ----------------------------------------------------------------------------
// Terrain types — rolling resistance & traction (regolith mechanics estimates)
// ----------------------------------------------------------------------------
export const TERRAIN = {
  bedrock: { name: 'Bedrock',      crr: 0.05, mu: 0.80, damage: 0.10, color: [0.62, 0.46, 0.36] },
  gravel:  { name: 'Gravel plain', crr: 0.09, mu: 0.65, damage: 0.12, color: [0.55, 0.33, 0.21] },
  sand:    { name: 'Loose sand',   crr: 0.20, mu: 0.45, damage: 0.0,  color: [0.70, 0.42, 0.24] },
  rocky:   { name: 'Rock field',   crr: 0.12, mu: 0.70, damage: 1.6,  color: [0.40, 0.27, 0.20] },
};

// ----------------------------------------------------------------------------
// Component catalog
// mass kg · cost $M · power W (consumption while active) · special fields
// ----------------------------------------------------------------------------
export const CATALOG = {
  chassis: {
    label: 'Chassis', icon: '▣', single: true,
    help: 'The body, computer and thermal box. Bigger chassis carry more payload but weigh more — and weight costs energy on every metre.',
    options: [
      { id: 'light',  name: 'Scout (MER-class)',  mass: 140, cost: 150, baseLoad: 70,  sleepLoad: 25, payload: 50,  scale: 0.62,
        desc: 'Small & efficient like Spirit/Opportunity (185 kg). Very limited payload.' },
      { id: 'medium', name: 'Explorer',           mass: 360, cost: 330, baseLoad: 110, sleepLoad: 40, payload: 130, scale: 0.82,
        desc: 'Balanced mid-size platform.' },
      { id: 'heavy',  name: 'Laboratory (MSL-class)', mass: 640, cost: 520, baseLoad: 150, sleepLoad: 55, payload: 260, scale: 1.0, doc: true,
        desc: 'Curiosity-class (899 kg total). Carries a full lab — but needs ≥150 W just to stay awake.' },
    ],
  },
  wheels: {
    label: 'Wheels', icon: '◎', single: true,
    help: 'Wheels decide rolling resistance (energy), grip (max slope) and how well you survive sharp rocks.',
    options: [
      { id: 'std',    name: 'Aluminium 50 cm',      mass: 24, cost: 20, sandCrr: 1.0,  grip: 1.0,  durability: 1.0, speed: 0.040, radius: 1.0, width: 1.0, color: 0x9a9a9a, doc: true,
        desc: 'Curiosity heritage. Good all-rounder, but thin skin gets punctured by sharp rocks.' },
      { id: 'grouser', name: 'Large grouser 70 cm', mass: 42, cost: 35, sandCrr: 0.65, grip: 1.25, durability: 1.3, speed: 0.050, radius: 1.35, width: 1.2, color: 0x6d6d6d,
        desc: 'Big cleated wheels float on sand and climb steep slopes. Heavy and power hungry to turn.' },
      { id: 'narrow', name: 'Narrow light 40 cm',   mass: 12, cost: 12, sandCrr: 1.6,  grip: 0.85, durability: 0.7, speed: 0.045, radius: 0.8, width: 0.65, color: 0xb8b8b8,
        desc: 'Lightest option. Sinks in sand and struggles on slopes.' },
      { id: 'mesh',   name: 'Shape-memory mesh tyre', mass: 30, cost: 60, sandCrr: 0.8, grip: 1.15, durability: 2.0, speed: 0.045, radius: 1.1, width: 1.0, color: 0xc9b98a,
        desc: 'NASA Glenn "superelastic" tyre concept. Flexes over sharp rocks without damage. Expensive.' },
    ],
  },
  solar: {
    label: 'Solar Panels', icon: '▤', single: true,
    help: 'Free energy from the Sun — but output drops with sun angle and dust in the air (optical depth τ).',
    options: [
      { id: 'none', name: 'No solar panels', mass: 0, cost: 0, area: 0, desc: 'Rely on battery and/or RTG only.' },
      { id: 's2',   name: 'Solar array 2 m²', mass: 9,  cost: 25, area: 2, desc: '~160 W at noon in clear skies.' },
      { id: 's4',   name: 'Solar array 4 m²', mass: 18, cost: 45, area: 4, desc: '~330 W at noon in clear skies.' },
      { id: 's6',   name: 'Solar array 6 m²', mass: 28, cost: 70, area: 6, desc: '~490 W at noon. Large wings add mass.' },
    ],
  },
  rtg: {
    label: 'Nuclear Power', icon: '☢', single: true,
    help: 'An MMRTG makes steady power day & night, in any dust storm, and its waste heat keeps electronics warm.',
    options: [
      { id: 'none',  name: 'No RTG', mass: 0, cost: 0, power: 0, heat: false, desc: 'Lighter and cheaper.' },
      { id: 'mmrtg', name: 'MMRTG (110 W)', mass: 45, cost: 110, power: 110, heat: true, doc: true,
        desc: '110 W electric + ~2,000 W of heat from plutonium-238 decay. 45 kg.' },
    ],
  },
  battery: {
    label: 'Battery', icon: '▮', single: true,
    help: 'Lithium-ion batteries (~100 Wh/kg at pack level) buffer peaks like driving (up to 500 W).',
    options: [
      { id: 'b06', name: 'Li-ion 0.6 kWh', mass: 6,  cost: 8,  capacity: 600,  desc: 'Light. Little margin.' },
      { id: 'b12', name: 'Li-ion 1.2 kWh', mass: 12, cost: 14, capacity: 1200, desc: 'Similar to one Curiosity battery (42 Ah × 28 V).' },
      { id: 'b24', name: 'Li-ion 2.4 kWh', mass: 24, cost: 26, capacity: 2400, doc: true, desc: 'Curiosity-like pair of 42 Ah batteries.' },
      { id: 'b36', name: 'Li-ion 3.6 kWh', mass: 36, cost: 38, capacity: 3600, desc: 'Big reserve, heavy.' },
    ],
  },
  cameras: {
    label: 'Cameras', icon: '◉', single: false,
    help: 'Cameras support navigation and imaging science. Hazcams detect dangerous rocks automatically.',
    options: [
      { id: 'navcam',  name: 'Navcam (stereo B/W)',  mass: 1.5, cost: 6,  power: 8,  payloadUse: true,
        desc: 'Wide-angle stereo. Basic images of targets.' },
      { id: 'hazcam',  name: 'Hazcams (4×)',         mass: 2.5, cost: 8,  power: 10, payloadUse: true,
        desc: 'Detects hazardous rocks — reduces wheel damage and shows hazards on the HUD.' },
      { id: 'mastcam', name: 'Mastcam (colour zoom)', mass: 4,  cost: 20, power: 20, payloadUse: true,
        desc: 'High-res colour panoramas. Needed for full imaging science.' },
    ],
  },
  instruments: {
    label: 'Science Sensors', icon: '✦', single: false,
    help: 'Each science target needs specific instruments. No instrument = no data.',
    options: [
      { id: 'rems',     name: 'Weather station (REMS-type)', mass: 1.3, cost: 10, power: 15, payloadUse: true,
        desc: 'Air temperature, pressure, wind, humidity, UV.' },
      { id: 'rad',      name: 'Radiation detector (RAD-type)', mass: 1.6, cost: 15, power: 4, payloadUse: true,
        desc: 'Cosmic-ray & solar-particle dose.' },
      { id: 'chemcam',  name: 'Laser spectrometer (ChemCam-type)', mass: 10, cost: 40, power: 60, payloadUse: true,
        desc: 'Zaps rocks up to 7 m away and reads elemental composition.' },
      { id: 'dan',      name: 'Neutron detector (DAN-type)', mass: 4.5, cost: 15, power: 15, payloadUse: true,
        desc: 'Measures hydrogen (water) down to ~60 cm below the surface.' },
      { id: 'gpr',      name: 'Ground radar (RIMFAX-type)', mass: 3, cost: 25, power: 10, payloadUse: true,
        desc: 'Images rock layers up to 10 m underground.' },
    ],
  },
  comms: {
    label: 'Communication', icon: '⌁', single: true,
    help: 'Science only counts once it reaches Earth. Relay via orbiters is fast but only during passes.',
    options: [
      { id: 'uhf',  name: 'UHF relay antenna', mass: 2,  cost: 10, txPower: 15, relay: true,  dte: false,
        desc: 'Sends up to 250 Mb per orbiter pass (MRO 11:30, MAVEN 16:00 daily). 15 W.' },
      { id: 'hga',  name: 'High-gain dish (X-band)', mass: 30, cost: 30, txPower: 100, relay: false, dte: true,
        desc: 'Direct-to-Earth any time, but slow (~40 Mb/hour) and draws 100 W while sending.' },
      { id: 'both', name: 'UHF + High-gain (like Curiosity)', mass: 32, cost: 38, txPower: 100, relay: true, dte: true, doc: true,
        desc: 'Best coverage, highest mass.' },
    ],
  },
  arm: {
    label: 'Robotic Arm', icon: '⟟', single: true,
    help: 'Physical samples need an arm. Drilling rock cores needs the heavy arm with a drill.',
    options: [
      { id: 'none',  name: 'No arm', mass: 0, cost: 0, power: 0, scoop: false, drill: false, apxs: false, payloadUse: true, desc: 'No samples possible.' },
      { id: 'scoop', name: 'Light arm + scoop', mass: 12, cost: 25, power: 40, scoop: true, drill: false, apxs: true, payloadUse: true,
        desc: 'Collects loose soil/sand. Carries an APXS contact spectrometer.' },
      { id: 'drill', name: 'Heavy arm + drill (MSL-type)', mass: 34, cost: 60, power: 120, scoop: true, drill: true, apxs: true, payloadUse: true, doc: true,
        desc: '2.1 m arm with percussion drill, scoop and APXS. Heavy.' },
    ],
  },
};

export const CATEGORY_ORDER = ['chassis', 'wheels', 'solar', 'rtg', 'battery', 'cameras', 'instruments', 'comms', 'arm'];

export const DEFAULT_DESIGN = {
  chassis: 'medium', wheels: 'std', solar: 's4', rtg: 'none', battery: 'b12',
  cameras: ['navcam'], instruments: ['rems'], comms: 'uhf', arm: 'scoop',
};

export const BUDGET_M = 900; // $M hardware budget

// ----------------------------------------------------------------------------
// Mission: Gale crater-inspired site
// ----------------------------------------------------------------------------
export const MISSION = {
  id: 'mars-gale',
  name: 'Operation Aeolis',
  site: 'Gale Crater — Aeolis Palus (4.5° S, 137.4° E)',
  sols: 3,          // campaign length
  startHour: 9.0,  // daily operations window (local Mars time)
  endHour: 17.5,
  secPerHour: 3699, // one Mars "hour" = 1/24 sol = 61.65 Earth minutes
  timeScale: 100,  // 1 real second = 100 Mars seconds
  landing: { x: -300, z: 280 },
  dust: { tauStart: 0.6, tauStorm: 1.6, stormStart: 13.0, stormPeak: 15.0, clearBy: 48 + 15 }, // absolute Mars hours
  relayPasses: [ { t: 11.5, name: 'MRO', capacityMb: 250 }, { t: 16.0, name: 'MAVEN', capacityMb: 200 } ], // daily (local time)
  targets: [
    {
      id: 'T1', name: 'Yellowknife Layers', x: -110, z: 120, kind: 'Ancient lakebed mudstone',
      blurb: 'Fine-grained layered rock that formed at the bottom of an ancient lake.',
      tasks: [
        { id: 'img',  label: 'Image the layers',      needs: ['mastcam|navcam'], dataMb: 60, points: 10 },
        { id: 'chem', label: 'Rock composition',      needs: ['chemcam|apxs'],   dataMb: 12, points: 20 },
        { id: 'core', label: 'Drill a rock core',     needs: ['drill'],          dataMb: 20, points: 30, sample: true },
      ],
    },
    {
      id: 'T2', name: 'Bagnold Dunes', x: 150, z: 210, kind: 'Active basaltic sand dunes',
      blurb: 'Dark, wind-blown sand. Loose and dangerous to drive in.',
      tasks: [
        { id: 'wx',    label: 'Weather & wind record', needs: ['rems'],          dataMb: 4,  points: 15 },
        { id: 'scoop', label: 'Scoop a sand sample',   needs: ['scoop'],         dataMb: 10, points: 25, sample: true },
        { id: 'img',   label: 'Image ripple pattern',  needs: ['mastcam|navcam'], dataMb: 40, points: 10 },
      ],
    },
    {
      id: 'T3', name: 'Vera Rubin Ridge', x: 170, z: -130, kind: 'Hematite-bearing ridge',
      blurb: 'A resistant ridge that hints at water flowing through the rock long ago.',
      tasks: [
        { id: 'h2o',  label: 'Subsurface water scan', needs: ['dan|gpr'],      dataMb: 15, points: 25 },
        { id: 'chem', label: 'Rock composition',      needs: ['chemcam|apxs'], dataMb: 12, points: 20 },
      ],
    },
    {
      id: 'T4', name: 'Rim Overlook', x: -190, z: -210, kind: 'Elevated crater rim',
      blurb: 'High ground with a view across the crater floor.',
      tasks: [
        { id: 'rad',  label: 'Radiation dose',        needs: ['rad'],     dataMb: 2,  points: 20 },
        { id: 'pano', label: '360° colour panorama',  needs: ['mastcam'], dataMb: 90, points: 15 },
        { id: 'wx',   label: 'Weather record',        needs: ['rems'],    dataMb: 4,  points: 10 },
      ],
    },
  ],
};

export const MISSIONS_MENU = [
  { id: 'earth', name: 'Earth Observation', diff: 'Easy', locked: true, planet: 'earth',
    desc: 'Design a satellite to monitor climate & land use.', skills: ['Orbits', 'Remote sensing'] },
  { id: 'moon', name: 'Lunar South Pole', diff: 'Medium', locked: true, planet: 'moon',
    desc: 'Prospect for water ice in permanently shadowed craters.', skills: ['Thermal design', 'Power'] },
  { id: 'mars', name: 'Mars Exploration', diff: 'Hard', locked: false, planet: 'mars',
    desc: 'Design a rover, plan a traverse in Gale Crater and return science.', skills: ['Power budget', 'Mobility', 'Science ops'] },
];
