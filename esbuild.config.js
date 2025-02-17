const esbuild = require('esbuild');
const path = require('path');

esbuild
  .build({
    entryPoints: ['./src/*'],
    bundle: true,
    outdir: './dist',
    target: 'es2021',
    platform: 'node',
    sourcemap: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
