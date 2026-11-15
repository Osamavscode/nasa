# RED FRONTIER — Mars Mission Designer
**NASA International Space Apps Challenge — playable PC demo**

> *Design it. Simulate it. Explore it. Learn from it.*

You are the lead engineer of a Mars rover mission to Gale Crater. You design the rover part by part, plan its traverse on an orbital map, then drive it in 3D across 3 sols. Physics equations and published Curiosity data decide whether your rover survives, and what science it brings home.

---

## 1. How to play (Windows PC)

### Option A — Desktop app (recommended)
1. Unzip **`RedFrontier-Windows.zip`**.
2. Open the folder `RedFrontier-win32-x64` and double-click **`RedFrontier.exe`**.
3. If Windows SmartScreen says *"Windows protected your PC"*, click **More info → Run anyway**. The app is not code-signed, which is normal for hackathon builds.

`F11` toggles fullscreen. No installation or internet connection is needed.

### Option B — Browser version
Unzip **`RedFrontier-Browser.zip`** and double-click `index.html`. Use Chrome or Edge, which work straight from the file with no server.

### Minimum PC
Any PC with a GPU that supports WebGL 2 (Intel HD 520 / GTX 650 or newer). If it is slow, go to **Settings → Quality: Low**.

---

## 2. Game flow (matches the team vision document)

| # | Screen | What happens |
|---|--------|--------------|
| 1 | **Main Menu** | Play · Settings · Credits · Exit, over a rotating 3D Mars with an orbiter |
| 2 | **Mission Selection** | Mars Exploration is playable. Earth Observation and Lunar South Pole are shown as "coming in v2". |
| 3 | **Mission Briefing** | Objectives, challenges, the dust-storm forecast, and a Gale Crater environment table with real values marked `DATA` |
| 4 | **Rover Design** | 9 component categories, a live 3D preview, and real-time mass, power, mobility and science stats with engineering checks |
| 5 | **Mission Planning** | Click waypoints on a shaded-relief map. Red segments are too steep or too soft *for your wheels*. Shows energy, battery and time estimates. |
| 6 | **3D Mission** | Drive (WASD) or use AutoNav (R) across Martian terrain, run science at the 4 targets (E), and survive the nights |
| 7 | **Data Dashboard** | `Tab` opens it in-game. Telemetry charts, science log, energy budget and mission log. |
| 8 | **Mission Results** | Completion %, grade, KPIs, and an engineering report on *what helped and what hurt*, with the physics behind each point |

### Controls
| Key | Action |
|-----|--------|
| `W A S D` / arrows | Drive and steer (the rover can turn in place) |
| `Space` | Brake |
| `R` | AutoNav: follow your planned route |
| `E` | Open science at a target (stand inside the blue ring) |
| `1` `2` `3` | Run a science task while the science panel is open |
| `Tab` | Scientific data dashboard |
| `M` | Big map |
| `C` | Navcam (first-person) camera |
| `T` | Time warp ×1 / ×2 / ×4 |
| Drag / wheel | Orbit / zoom the camera |
| `Esc` | Pause (restart, redesign, re-plan, menu) |

---

## 3. How engineering decisions change the mission

Everything below is computed live in `src/physics.js`. The planner, the HUD and the results report all use the same equations.

| Decision | Physics in the game | Effect you'll feel |
|----------|---------------------|--------------------|
| Chassis size | Idle load 70 / 110 / 150 W, sleep load 25 / 40 / 55 W, payload limit | Bigger chassis means more instruments but a larger energy bill every hour |
| Wheels | Climbing limit **tan θ ≤ μ·grip − C<sub>rr</sub>**; sand sinkage grows with mass and smaller footprint | Narrow wheels get stuck in the dunes (2° limit). Grouser wheels climb 25° in sand. |
| Total mass | Rolling force **F = m·g·(C<sub>rr</sub>·cos θ + sin θ)**, g = 3.721 m/s²; power **P = F·v/η** | Heavy rovers drain more energy and sink deeper |
| Solar area | **P = A·η·S·μ·(e<sup>−τ/μ</sup> + 0.35(1−e<sup>−τ/μ</sup>))**, S = 586 W/m², μ = cos(sun zenith), τ = dust optical depth | Output collapses during the sol‑1 dust storm (τ 0.6 → 1.6) and is zero at night |
| MMRTG | 110 W, 45 kg, ~2 kW of waste heat | Steady power day and night, and no electric heaters needed |
| Battery | E(t+Δt) = E(t) + (P<sub>gen</sub> − P<sub>load</sub>)·Δt | Too small and the rover freezes overnight at −70 °C |
| Heaters | P = k·(T<sub>min</sub> − T<sub>air</sub>), keeping electronics ≥ −40 °C | Large energy cost for solar-only rovers at night |
| Cameras | Hazcams detect boulders | AutoNav steers around rocks and wheel wear is roughly halved |
| Instruments / arm | Each science task needs specific hardware | A missing drill means no rock core and lost points |
| Comms | UHF relay passes at 11:30 and 16:00 (250 Mb), or X-band direct-to-Earth (40 Mb/h, 100 W) | Science only counts once it reaches Earth |

Time is compressed: 1 real second = 100 Mars seconds. The rover moves at its real speed (4–5 cm/s, like Curiosity).

---

## 4. Real data used (marked `DATA` / `REAL` in game)
- Radiation 0.64 mSv/day, 0.21 mGy/day: Hassler et al. 2014, *Science* (MSL RAD)
- Pressure 685–780 Pa daily cycle; air temperature −70 °C to +6 °C: REMS team (CAB / NASA JPL)
- MMRTG 110 W electric, 45 kg, ~2,000 W thermal: NASA MMRTG fact sheet
- Rover loads 45–70 W asleep, ≥150 W awake, ≤500 W driving: E. Lakdawalla, *The Design and Engineering of Curiosity* (2018)
- Top speed 4 cm/s, 50 cm wheels, 30° tilt limit: MSL rover overview
- Mars g = 3.721 m/s², solar constant ~586 W/m²: NASA Mars Fact Sheet
- Rock compositions (SiO₂, FeOT, …) representative of MSL APXS/ChemCam results; DAN hydrogen 2–5 wt%

Other values (component costs, some masses, terrain friction) are engineering estimates chosen to be realistic.

---

## 5. Source code (for the team)

```
RedFrontier-Source/
├── src/
│   ├── data.js          ← ALL tunable content: components, mission, targets, constants, sources
│   ├── physics.js       ← engineering & environment equations
│   ├── planner.js       ← route energy/time/feasibility estimator
│   ├── terrain.js       ← analytic Mars terrain (height, slope, terrain type, rocks)
│   ├── world.js         ← Three.js 3D Mars environment (sky, sun, dust, beacons)
│   ├── rover.js         ← loads the rover GLB and customises it (wheels, solar wings, batteries, antennas)
│   ├── science.js       ← science measurement results
│   ├── audio.js         ← synthesised sound (no audio files needed)
│   ├── main.js          ← app shell, renderer, screen router
│   ├── styles.css       ← design system (dark space theme, neon blue, Mars orange, glass panels)
│   └── screens/         ← menu, missions/briefing, design, planning, sim (gameplay + dashboard), results
├── assets/rover.glb     ← optimised rover model (from the team's zip)
├── desktop/             ← Electron wrapper (main.cjs, preload.cjs, icon)
├── build.mjs            ← builds dist/ (browser version)
└── tools/               ← model optimiser & Windows packager
```

### Build it yourself
Requires Node.js 20+.
```bash
npm install
node build.mjs --min            # → dist/ (browser version)
# Windows desktop app:
mkdir stage && cp -r dist stage/game && cp desktop/* stage/ && cp desktop/app-package.json stage/package.json
node tools/pack.mjs             # → release/RedFrontier-win32-x64/RedFrontier.exe
```

### Easy things to change
- **Team names**: `src/screens/menu.js`, credits section
- **Game name / tagline**: `GAME` in `src/data.js`
- **New components**: add an entry to `CATALOG` in `src/data.js`; the UI and stats update automatically
- **Science targets**: `MISSION.targets` in `src/data.js` (move them, add tasks)
- **Difficulty**: `BUDGET_M`, `MISSION.sols`, `MISSION.dust`, `timeScale`
- **Use the Perseverance model instead**: run `node tools/optimize.mjs input.glb assets/rover.glb`, then rebuild

---

## 6. Known limitations
- Moon and Earth missions are placeholders (locked), following the vision doc's "focus on Mars first".
- The rover's mesh always shows its original arm, mast and RTG. Component choices are shown with added parts (solar wings, battery packs, antennas, wheel size and colour, chassis scale).
- The `.exe` uses the default Electron icon in Explorer; the window icon is custom. The build is not code-signed.
- The rover 3D model came from the team's zip. Check its licence and credit its author before publishing.
- This is an educational fan project, not affiliated with or endorsed by NASA.
