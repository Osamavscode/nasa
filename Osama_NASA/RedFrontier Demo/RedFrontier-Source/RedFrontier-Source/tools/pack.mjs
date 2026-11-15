import { packager } from '@electron/packager';
const paths = await packager({ dir: 'stage', out: 'release', platform: 'win32', arch: 'x64', overwrite: true, asar: true,
  name: 'RedFrontier', executableName: 'RedFrontier', appCopyright: 'Space Apps Team',
  win32metadata: { CompanyName: 'Space Apps Team', FileDescription: 'Red Frontier - Mars Mission Designer', ProductName: 'Red Frontier' } });
console.log(paths);
