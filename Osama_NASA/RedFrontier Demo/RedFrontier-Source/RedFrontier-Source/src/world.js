// ============================================================================
//  3D MARS ENVIRONMENT (Three.js)
// ============================================================================
import * as THREE from 'three';
import { WORLD, height, terrainType, slopeAt, rocks, fbm, noise } from './terrain.js';
import { TERRAIN, MISSION } from './data.js';
import { sunMu } from './physics.js';

function detailTexture() {
  const n = 256, c = document.createElement('canvas'); c.width = c.height = n;
  const g = c.getContext('2d'), img = g.createImageData(n, n);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const v = 0.75 + 0.25 * (noise(x / 6, y / 6, 3) * 0.5 + noise(x / 2, y / 2, 4) * 0.35 + Math.random() * 0.3);
    const o = (y * n + x) * 4; img.data[o] = img.data[o + 1] = img.data[o + 2] = Math.min(255, v * 255); img.data[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(220, 220);
  t.anisotropy = 4;
  return t;
}

function makeSky() {
  const geo = new THREE.SphereGeometry(9000, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sunDir: { value: new THREE.Vector3(0, 1, 0) }, tau: { value: 0.6 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: `uniform vec3 sunDir; uniform float tau; varying vec3 vDir;
      void main(){
        float h = max(vDir.y, 0.0);
        vec3 zen = mix(vec3(0.42,0.30,0.24), vec3(0.55,0.42,0.33), clamp(tau-0.5,0.0,1.0));
        vec3 hor = mix(vec3(0.86,0.66,0.48), vec3(0.78,0.58,0.42), clamp(tau-0.5,0.0,1.0));
        vec3 col = mix(hor, zen, pow(h, 0.55));
        float sd = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
        col += vec3(0.55,0.65,0.85) * pow(sd, 40.0) * 0.5 / (1.0+tau);   // blue-ish halo (Mars forward scattering)
        col += vec3(1.0,0.95,0.85) * smoothstep(0.9993, 0.9998, sd) * 1.5 / (0.6+tau);
        col *= mix(0.05, 1.0, smoothstep(-0.08, 0.25, sunDir.y));
        if (vDir.y < 0.0) col = hor * 0.8 * mix(0.05, 1.0, smoothstep(-0.08, 0.25, sunDir.y));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  return new THREE.Mesh(geo, mat);
}

export function createWorld(renderer, quality = 'medium') {
  const Q = { low: { seg: 220, rocks: 0.45, shadow: 1024 }, medium: { seg: 320, rocks: 0.8, shadow: 2048 }, high: { seg: 420, rocks: 1, shadow: 4096 } }[quality];
  const scene = new THREE.Scene();
  const fogCol = new THREE.Color(0xc79b76);
  scene.fog = new THREE.FogExp2(fogCol, 0.0016);
  const sky = makeSky(); scene.add(sky);

  // ---- lights
  const hemi = new THREE.HemisphereLight(0xffd7b0, 0x6b3a22, 0.9); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0dd, 2.6);
  sun.castShadow = quality !== 'low';
  sun.shadow.mapSize.set(Q.shadow, Q.shadow);
  const sc = sun.shadow.camera; sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -30; sc.near = 1; sc.far = 400;
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);

  // ---- main terrain
  const geo = new THREE.PlaneGeometry(WORLD.size, WORLD.size, Q.seg, Q.seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, cols = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = height(x, z); pos.setY(i, y);
    const ty = terrainType(x, z);
    const c = TERRAIN[ty].color, v = 0.9 + 0.18 * fbm(x / 8, z / 8, 2, 77);
    const bright = 0.92 + Math.min(0.15, y * 0.004);
    cols[i * 3] = c[0] * v * bright; cols[i * 3 + 1] = c[1] * v * bright; cols[i * 3 + 2] = c[2] * v * bright;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  const tmat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0, map: detailTexture() });
  const ground = new THREE.Mesh(geo, tmat);
  ground.receiveShadow = true; scene.add(ground);

  // ---- far landscape with Mount Sharp (Aeolis Mons) to the north
  const fgeo = new THREE.PlaneGeometry(16000, 16000, 160, 160); fgeo.rotateX(-Math.PI / 2);
  const fp = fgeo.attributes.position, fcols = new Float32Array(fp.count * 3);
  for (let i = 0; i < fp.count; i++) {
    const x = fp.getX(i), z = fp.getZ(i);
    const r = Math.max(Math.abs(x), Math.abs(z));
    let y = r < 520 ? -60 : 20 + fbm(x / 600, z / 600, 4, 91) * 60 + Math.max(0, r - 600) * 0.02;
    const dm = Math.hypot(x - 300, z - 4200); // Aeolis Mons lies south of the landing ellipse
    y += 1400 * Math.exp(-(dm * dm) / (1900 * 1900)) * (0.85 + 0.25 * fbm(x / 400, z / 400, 3, 92));
    if (Math.hypot(x, z) > 6500) y += (Math.hypot(x, z) - 6500) * 0.35; // far crater wall
    fp.setY(i, y);
    const k = 0.75 + 0.15 * fbm(x / 300, z / 300, 2, 93);
    fcols[i * 3] = 0.66 * k; fcols[i * 3 + 1] = 0.42 * k; fcols[i * 3 + 2] = 0.28 * k;
  }
  fgeo.setAttribute('color', new THREE.BufferAttribute(fcols, 3)); fgeo.computeVertexNormals();
  const far = new THREE.Mesh(fgeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
  scene.add(far);

  // ---- rocks (instanced)
  const rockGeo = new THREE.DodecahedronGeometry(1, 1);
  const rp = rockGeo.attributes.position;
  for (let i = 0; i < rp.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(rp, i);
    v.multiplyScalar(1 + 0.22 * noise(v.x * 2.1 + 5, v.z * 2.1 + v.y * 1.7, 61));
    rp.setXYZ(i, v.x, v.y, v.z);
  }
  rockGeo.computeVertexNormals();
  const allRocks = rocks().filter((r, i) => r.big || (i % 100) / 100 < Q.rocks);
  const rockMesh = new THREE.InstancedMesh(rockGeo, new THREE.MeshStandardMaterial({ color: 0x7a4a33, roughness: 0.9, flatShading: true }), allRocks.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  allRocks.forEach((r, i) => {
    e.set(r.rot * 0.3, r.rot, r.rot * 0.2); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(r.x, height(r.x, r.z) + r.size * 0.25, r.z), q, new THREE.Vector3(r.size, r.size * r.sq, r.size * (0.8 + r.sq * 0.3)));
    rockMesh.setMatrixAt(i, m4);
    const c = new THREE.Color().setHSL(0.05 + (r.seed % 7) * 0.004, 0.45, 0.22 + (r.seed % 13) * 0.012);
    rockMesh.setColorAt(i, c);
  });
  rockMesh.castShadow = true; rockMesh.receiveShadow = true;
  scene.add(rockMesh);

  // ---- science targets
  const targets = {};
  for (const t of MISSION.targets) {
    const g = new THREE.Group();
    const y = height(t.x, t.z);
    g.position.set(t.x, y, t.z);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.4, 60, 16, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x3fd0ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    beam.position.y = 30; g.add(beam);
    const ring = new THREE.Mesh(new THREE.RingGeometry(7.5, 8.2, 64),
      new THREE.MeshBasicMaterial({ color: 0x3fd0ff, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.4; g.add(ring);
    // feature geometry
    if (t.id === 'T1') { // layered mudstone slabs
      for (let i = 0; i < 6; i++) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(5 - i * 0.5, 0.35, 3.2 - i * 0.3),
          new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(0.06, 0.35, 0.42 - i * 0.03), roughness: 0.9 }));
        s.position.set(3, 0.18 + i * 0.35, -2); s.rotation.y = 0.3 + i * 0.03; s.castShadow = s.receiveShadow = true; g.add(s);
      }
    }
    if (t.id === 'T3') {
      for (let i = 0; i < 12; i++) {
        const s = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35 + (i % 3) * 0.2, 0),
          new THREE.MeshStandardMaterial({ color: 0x5a2620, roughness: 0.6, metalness: 0.2, flatShading: true }));
        s.position.set(Math.cos(i * 2.4) * (2 + i * 0.25), 0.2, Math.sin(i * 2.4) * (2 + i * 0.25)); s.castShadow = true; g.add(s);
      }
    }
    scene.add(g);
    targets[t.id] = { group: g, beam, ring };
  }

  // ---- landing marker (sky-crane touchdown blast zone)
  const land = new THREE.Mesh(new THREE.CircleGeometry(9, 48), new THREE.MeshBasicMaterial({ color: 0x3a2014, transparent: true, opacity: 0.35, depthWrite: false }));
  land.rotation.x = -Math.PI / 2; land.position.set(MISSION.landing.x, height(MISSION.landing.x, MISSION.landing.z) + 0.15, MISSION.landing.z);
  scene.add(land);

  // ---- route
  let routeLine = null;
  function setRoute(points) {
    if (routeLine) { scene.remove(routeLine); routeLine.geometry.dispose(); }
    if (!points || points.length < 2) return;
    const pts = [];
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i], b = points[i + 1], d = Math.hypot(b.x - a.x, b.z - a.z), n = Math.max(2, Math.ceil(d / 3));
      for (let k = 0; k < n; k++) { const t = k / n, x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t; pts.push(new THREE.Vector3(x, height(x, z) + 0.35, z)); }
    }
    const last = points[points.length - 1]; pts.push(new THREE.Vector3(last.x, height(last.x, last.z) + 0.35, last.z));
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    routeLine = new THREE.Line(g, new THREE.LineDashedMaterial({ color: 0x46e0ff, dashSize: 2, gapSize: 1.6, transparent: true, opacity: 0.85 }));
    routeLine.computeLineDistances(); scene.add(routeLine);
  }

  // ---- airborne dust
  const dustN = quality === 'low' ? 600 : 1500;
  const dg = new THREE.BufferGeometry(), dpos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) { dpos[i * 3] = (Math.random() - 0.5) * 120; dpos[i * 3 + 1] = Math.random() * 25; dpos[i * 3 + 2] = (Math.random() - 0.5) * 120; }
  dg.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  const dc = document.createElement('canvas'); dc.width = dc.height = 32; const dctx = dc.getContext('2d');
  const grd = dctx.createRadialGradient(16, 16, 0, 16, 16, 16); grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  dctx.fillStyle = grd; dctx.fillRect(0, 0, 32, 32);
  const dotTex = new THREE.CanvasTexture(dc);
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: 0xd9a77a, size: 0.14, map: dotTex, transparent: true, opacity: 0.35, depthWrite: false }));
  scene.add(dust);

  // ---- wheel dust trail
  const trailN = 200, tg = new THREE.BufferGeometry(), tpos = new Float32Array(trailN * 3), tlife = new Float32Array(trailN);
  tg.setAttribute('position', new THREE.BufferAttribute(tpos, 3));
  const trail = new THREE.Points(tg, new THREE.PointsMaterial({ color: 0xc58a5c, size: 0.5, map: dotTex, transparent: true, opacity: 0.5, depthWrite: false }));
  scene.add(trail); let trailIdx = 0;

  const sunDir = new THREE.Vector3();
  function update(dt, hour, tau, focus, speed) {
    // sun path: rises east (+x), sets west (−x), slightly north at Gale (southern latitude, equinox)
    const ha = (hour - 12) * 15 * Math.PI / 180;
    const mu = sunMu(hour);
    const el = Math.asin(Math.min(1, mu));
    sunDir.set(-Math.sin(ha) * Math.cos(el), Math.sin(el), -0.08).normalize();
    sky.material.uniforms.sunDir.value.copy(sunDir);
    sky.material.uniforms.tau.value = tau;
    sky.position.copy(focus);
    const dim = Math.exp(-tau / Math.max(0.15, mu));
    const day = Math.min(1, Math.max(0, (sunDir.y + 0.05) / 0.25));   // 0 at night, 1 in daylight
    sun.intensity = (0.4 + 2.6 * dim * Math.min(1, mu * 3)) * day;
    hemi.intensity = (0.55 + 0.6 * (1 - dim) + 0.3 * mu) * (0.12 + 0.88 * day);
    sun.position.copy(focus).addScaledVector(sunDir, 150);
    sun.target.position.copy(focus);
    fogCol.setRGB(0.78 - (tau - 0.6) * 0.05, 0.6 - (tau - 0.6) * 0.06, 0.46 - (tau - 0.6) * 0.06);
    fogCol.multiplyScalar(0.1 + 0.9 * day);
    scene.fog.color.copy(fogCol);
    scene.fog.density = 0.0011 + 0.0026 * Math.max(0, tau - 0.5);
    // dust follows camera focus
    dust.position.set(focus.x, focus.y - 3, focus.z);
    dust.material.opacity = 0.18 + 0.35 * Math.min(1, (tau - 0.5));
    const dp = dg.attributes.position;
    for (let i = 0; i < dustN; i++) { let x = dp.getX(i) + dt * (2 + tau * 4); if (x > 60) x -= 120; dp.setX(i, x); }
    dp.needsUpdate = true;
    // trail
    for (let i = 0; i < trailN; i++) { if (tlife[i] > 0) { tlife[i] -= dt; tpos[i * 3 + 1] += dt * 0.6; } else tpos[i * 3 + 1] = -999; }
    if (speed > 0.5) for (let k = 0; k < 2; k++) {
      const i = trailIdx = (trailIdx + 1) % trailN;
      tpos[i * 3] = focus.x + (Math.random() - 0.5) * 2.2; tpos[i * 3 + 2] = focus.z + (Math.random() - 0.5) * 2.2;
      tpos[i * 3 + 1] = height(tpos[i * 3], tpos[i * 3 + 2]) + 0.1; tlife[i] = 1.2;
    }
    tg.attributes.position.needsUpdate = true;
    // targets pulse
    const t = performance.now() / 1000;
    for (const k in targets) { targets[k].ring.material.opacity = 0.45 + 0.3 * Math.sin(t * 2); targets[k].beam.material.opacity = 0.15 + 0.08 * Math.sin(t * 1.3); }
  }

  function dispose() {
    scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { m.map?.dispose(); m.dispose(); }); } });
  }

  return { scene, sun, update, setRoute, targets, dispose, ground };
}
