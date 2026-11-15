// Synthesised audio (no external files): UI blips, wind ambience, motor hum
let ctx = null, master = null, sfxGain = null, musicGain = null;
let wind = null, motor = null, music = null;
export const audioSettings = { master: 0.7, sfx: 0.8, music: 0.5 };

function ensure() {
  if (ctx) return ctx;
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.connect(ctx.destination);
    sfxGain = ctx.createGain(); sfxGain.connect(master);
    musicGain = ctx.createGain(); musicGain.connect(master);
    applyVolumes();
  } catch { ctx = null; }
  return ctx;
}
export function applyVolumes() {
  if (!ctx) return;
  master.gain.value = audioSettings.master;
  sfxGain.gain.value = audioSettings.sfx;
  musicGain.gain.value = audioSettings.music * 0.35;
}
export function resume() { ensure(); if (ctx?.state === 'suspended') ctx.resume(); }

export function blip(freq = 880, dur = 0.06, type = 'sine', vol = 0.15) {
  if (!ensure()) return;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
  o.connect(g); g.connect(sfxGain); o.start(); o.stop(ctx.currentTime + dur + 0.02);
}
export const sfx = {
  click: () => blip(1200, 0.05, 'triangle', 0.12),
  hover: () => blip(1800, 0.025, 'sine', 0.04),
  select: () => { blip(660, 0.06, 'triangle'); setTimeout(() => blip(990, 0.08, 'triangle'), 60); },
  error: () => { blip(220, 0.15, 'sawtooth', 0.08); },
  success: () => { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => blip(f, 0.18, 'triangle', 0.12), i * 110)); },
  fail: () => { [392, 311, 262].forEach((f, i) => setTimeout(() => blip(f, 0.3, 'sawtooth', 0.07), i * 180)); },
  scan: () => { for (let i = 0; i < 6; i++) setTimeout(() => blip(1400 + i * 120, 0.04, 'square', 0.04), i * 70); },
  data: () => blip(2400, 0.08, 'sine', 0.08),
};

function noiseBuffer() {
  const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = b.getChannelData(0);
  let last = 0; for (let i = 0; i < d.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
  return b;
}
export function startAmbience() {
  if (!ensure() || wind) return;
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(); src.loop = true;
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
  const g = ctx.createGain(); g.gain.value = 0.25;
  src.connect(f); f.connect(g); g.connect(sfxGain); src.start();
  const mo = ctx.createOscillator(), mg = ctx.createGain(), mf = ctx.createBiquadFilter();
  mo.type = 'sawtooth'; mo.frequency.value = 55; mf.type = 'lowpass'; mf.frequency.value = 300; mg.gain.value = 0;
  mo.connect(mf); mf.connect(mg); mg.connect(sfxGain); mo.start();
  wind = { src, g, f }; motor = { mo, mg };
}
export function setAmbience(windAmt, motorAmt) {
  if (!wind) return;
  wind.g.gain.setTargetAtTime(0.12 + windAmt * 0.35, ctx.currentTime, 0.3);
  wind.f.frequency.setTargetAtTime(350 + windAmt * 600, ctx.currentTime, 0.3);
  motor.mg.gain.setTargetAtTime(motorAmt * 0.06, ctx.currentTime, 0.1);
  motor.mo.frequency.setTargetAtTime(45 + motorAmt * 35, ctx.currentTime, 0.1);
}
export function stopAmbience() {
  if (!wind) return;
  try { wind.src.stop(); motor.mo.stop(); } catch {}
  wind = motor = null;
}

// Slow ambient pad for menus
export function startMusic() {
  if (!ensure() || music) return;
  const notes = [110, 164.81, 220, 246.94, 329.63];
  const oscs = notes.map((f, i) => {
    const o = ctx.createOscillator(), g = ctx.createGain(), l = ctx.createOscillator(), lg = ctx.createGain();
    o.type = i % 2 ? 'sine' : 'triangle'; o.frequency.value = f; g.gain.value = 0.0;
    l.frequency.value = 0.05 + i * 0.03; lg.gain.value = 0.05; l.connect(lg); lg.connect(g.gain);
    g.gain.setTargetAtTime(0.06, ctx.currentTime, 3);
    o.connect(g); g.connect(musicGain); o.start(); l.start();
    return { o, l, g };
  });
  music = oscs;
}
export function stopMusic() {
  if (!music) return;
  music.forEach(({ o, l, g }) => { g.gain.setTargetAtTime(0, ctx.currentTime, 0.5); setTimeout(() => { try { o.stop(); l.stop(); } catch {} }, 1500); });
  music = null;
}
