import { NodeIO } from '@gltf-transform/core';
import { textureCompress, dedup, prune, metalRough } from '@gltf-transform/functions';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import sharp from 'sharp';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(process.argv[2]);
await doc.transform(metalRough(), dedup(), prune(), textureCompress({ encoder: sharp, targetFormat: 'jpeg', resize: [1024, 1024], quality: 82 }));
// name meshes by index so the game can find the wheel mesh
doc.getRoot().listMeshes().forEach((m,i)=>m.setName('part'+i));
doc.getRoot().listNodes().forEach((n,i)=>{ if(n.getMesh()) n.setName(n.getMesh().getName()); });
await io.write(process.argv[3], doc);
