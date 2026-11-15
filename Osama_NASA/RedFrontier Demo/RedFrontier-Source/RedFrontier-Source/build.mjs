// Build: bundles the game into dist/ (works by double-clicking index.html, no server needed)
import * as esbuild from 'esbuild';
import fs from 'fs';
const out = 'dist';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(`${out}/fonts`, { recursive: true });
await esbuild.build({ entryPoints: ['src/main.js'], bundle: true, format: 'iife', minify: process.argv.includes('--min'), sourcemap: false, outfile: `${out}/game.js`, target: 'es2022', logLevel: 'warning' });
fs.copyFileSync('src/styles.css', `${out}/styles.css`);
for (const [pkg, files] of Object.entries({ orbitron: ['orbitron-latin-500-normal', 'orbitron-latin-700-normal'], 'exo-2': ['exo-2-latin-400-normal', 'exo-2-latin-600-normal'], 'jetbrains-mono': ['jetbrains-mono-latin-400-normal'] }))
  for (const f of files) fs.copyFileSync(`node_modules/@fontsource/${pkg}/files/${f}.woff2`, `${out}/fonts/${f}.woff2`);
fs.writeFileSync(`${out}/rover-model.js`, `window.ROVER_GLB="${fs.readFileSync('assets/rover.glb').toString('base64')}";`);
fs.writeFileSync(`${out}/index.html`, `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Red Frontier — Mars Mission Designer</title><link rel="stylesheet" href="styles.css"></head>
<body><canvas id="gl"></canvas><div id="ui"></div><div id="fader"></div>
<script src="rover-model.js"></script><script src="game.js"></script></body></html>`);
console.log('built', fs.readdirSync(out));
