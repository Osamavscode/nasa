// ============================================================================
//  ROVER MODEL — loads the team's GLB rover and customises it per design
// ============================================================================
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolve } from './physics.js';

let base = null;          // { scene, wheelGeoms:[{geo, center}], wheelMat }
let loading = null;

function b64ToArrayBuffer(b64) {
  const bin = atob(b64); const len = bin.length; const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

export function loadRover(onProgress) {
  if (loading) return loading;
  loading = new Promise((res, rej) => {
    const loader = new GLTFLoader();
    const done = gltf => { base = prepare(gltf.scene); res(base); };
    if (window.ROVER_GLB) {
      onProgress?.(0.6);
      setTimeout(() => {
        try { loader.parse(b64ToArrayBuffer(window.ROVER_GLB), '', g => { onProgress?.(1); done(g); }, rej); } catch (e) { rej(e); }
      }, 30);
    } else {
      loader.load('assets/rover.glb', done, e => onProgress?.(e.total ? e.loaded / e.total : 0.5), rej);
    }
  });
  return loading;
}

/** Split the combined 6-wheel mesh into individual wheels so they can spin & scale */
function prepare(scene) {
  scene.updateMatrixWorld(true);
  let wheelMesh = null;
  scene.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true; o.receiveShadow = true;
      if (o.name === 'part8') wheelMesh = o;
      if (o.material) { o.material.envMapIntensity = 0.9; }
    }
  });
  const wheels = [];
  if (wheelMesh) {
    const g = wheelMesh.geometry.clone();
    g.applyMatrix4(wheelMesh.matrixWorld);
    const ng = g.index ? g.toNonIndexed() : g;
    const pos = ng.attributes.position;
    const triCount = pos.count / 3;
    // cluster by x sign and z position (3 bogie positions)
    const zs = []; for (let i = 0; i < pos.count; i++) zs.push(pos.getZ(i));
    const zmin = Math.min(...zs), zmax = Math.max(...zs);
    const buckets = Array.from({ length: 6 }, () => []);
    for (let t = 0; t < triCount; t++) {
      let cx = 0, cz = 0;
      for (let k = 0; k < 3; k++) { cx += pos.getX(t * 3 + k); cz += pos.getZ(t * 3 + k); }
      cx /= 3; cz /= 3;
      const zi = Math.min(2, Math.floor((cz - zmin) / (zmax - zmin + 1e-6) * 3));
      buckets[(cx > 0 ? 3 : 0) + zi].push(t);
    }
    const attrs = Object.keys(ng.attributes);
    for (const b of buckets) {
      if (!b.length) continue;
      const geo = new THREE.BufferGeometry();
      for (const a of attrs) {
        const src = ng.attributes[a], arr = new src.array.constructor(b.length * 3 * src.itemSize);
        b.forEach((t, j) => { for (let k = 0; k < 3; k++) for (let c = 0; c < src.itemSize; c++) arr[(j * 3 + k) * src.itemSize + c] = src.array[(t * 3 + k) * src.itemSize + c]; });
        geo.setAttribute(a, new THREE.BufferAttribute(arr, src.itemSize, src.normalized));
      }
      geo.computeBoundingBox();
      const center = new THREE.Vector3(); geo.boundingBox.getCenter(center);
      geo.translate(-center.x, -center.y, -center.z);
      wheels.push({ geo, center });
    }
    wheelMesh.parent.remove(wheelMesh);
    return { scene, wheels, wheelMat: wheelMesh.material, wheelRadius: wheels[0] ? wheels[0].center.y : 0.25 };
  }
  return { scene, wheels, wheelMat: null, wheelRadius: 0.25 };
}

// --------------------------------------------------------------- procedural add-ons
function solarTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#0a1a3a'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
    const grd = g.createLinearGradient(i * 16, j * 16, i * 16 + 16, j * 16 + 16);
    grd.addColorStop(0, '#1d3f8a'); grd.addColorStop(1, '#0f2556');
    g.fillStyle = grd; g.fillRect(i * 16 + 1, j * 16 + 1, 14, 14);
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let _solarTex;

/**
 * Build a rover Object3D for a design.
 * returns { root, body, wheels:[mesh], update(dt, speed) }
 */
export function buildRover(design) {
  const r = resolve(design);
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const model = base.scene.clone(true);
  body.add(model);

  // ---- wheels
  const wr = r.wheels.radius, ww = r.wheels.width;
  const mat = base.wheelMat ? base.wheelMat.clone() : new THREE.MeshStandardMaterial();
  mat.color = new THREE.Color(r.wheels.color);
  const wheelMeshes = [];
  for (const w of base.wheels) {
    const m = new THREE.Mesh(w.geo, mat);
    m.castShadow = true;
    m.position.copy(w.center);
    m.position.y = w.center.y * wr;
    m.scale.set(ww, wr, wr);
    body.add(m); wheelMeshes.push(m);
  }
  // body lifts so bigger wheels touch the ground
  model.position.y = base.wheelRadius * (wr - 1);

  // ---- solar wings (true physical area, compensated for chassis scale)
  const s = r.chassis.scale;
  if (r.solar.area > 0) {
    _solarTex ||= solarTexture();
    const depth = 1.5 / s;
    const wingW = (r.solar.area / 2) / 1.5 / s; // each wing: world area A/2 = (wingW·s)·(depth·s)
    const tex = _solarTex.clone(); tex.needsUpdate = true; tex.repeat.set(wingW * 1.5, depth * 1.5);
    const pm = new THREE.MeshStandardMaterial({ map: tex, metalness: 0.6, roughness: 0.25, emissive: 0x06102a });
    const fm = new THREE.MeshStandardMaterial({ color: 0xc8c8c8, metalness: 0.8, roughness: 0.4 });
    for (const side of [-1, 1]) {
      const wing = new THREE.Group();
      const panel = new THREE.Mesh(new THREE.BoxGeometry(wingW, 0.03, depth), pm);
      panel.position.x = side * wingW / 2; panel.castShadow = true;
      const frame = new THREE.Mesh(new THREE.BoxGeometry(wingW + 0.04, 0.02, depth + 0.04), fm);
      frame.position.copy(panel.position); frame.position.y = -0.02;
      wing.add(panel, frame);
      wing.position.set(side * 0.55, 1.42 + model.position.y, -0.35);
      wing.rotation.z = side * 0.06;
      body.add(wing);
    }
  }
  // ---- battery packs on deck (size ∝ capacity)
  const packs = Math.round(r.battery.capacity / 600);
  const bm = new THREE.MeshStandardMaterial({ color: 0xff7a2f, metalness: 0.3, roughness: 0.5, emissive: 0x2a0d00 });
  for (let i = 0; i < packs; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.3), bm);
    b.position.set(-0.75 + (i % 3) * 0.25, 1.2 + model.position.y + Math.floor(i / 3) * 0.15, -1.05);
    b.castShadow = true; body.add(b);
  }
  // ---- comms
  if (r.comms.dte) {
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 8, 0, Math.PI * 2, 0, 0.7),
      new THREE.MeshStandardMaterial({ color: 0xeeeeee, side: THREE.DoubleSide, metalness: 0.4, roughness: 0.3 }));
    dish.rotation.x = Math.PI; dish.position.set(0.85, 1.95 + model.position.y, -0.7); dish.rotation.z = 0.5;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4), new THREE.MeshStandardMaterial({ color: 0x888888 }));
    mast.position.set(0.85, 1.6 + model.position.y, -0.7);
    body.add(dish, mast);
  }
  if (r.comms.relay) {
    const helix = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.45, 8), new THREE.MeshStandardMaterial({ color: 0xffd27a, metalness: 0.7 }));
    helix.position.set(-0.6, 1.6 + model.position.y, -0.9); body.add(helix);
  }
  // ---- extra hazcam/instrument indicators (small blue lights)
  if (design.cameras.includes('hazcam')) {
    const lm = new THREE.MeshBasicMaterial({ color: 0x38c8ff });
    for (const x of [-0.3, 0.3]) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.05), lm); l.position.set(x, 0.75 + model.position.y, 1.35); body.add(l); }
  }

  root.scale.setScalar(s);

  let spin = 0;
  return {
    root, body, wheels: wheelMeshes,
    update(dt, speed) {
      spin += (speed * dt) / (base.wheelRadius * wr * s);
      for (const m of wheelMeshes) m.rotation.x = spin;
    },
  };
}
