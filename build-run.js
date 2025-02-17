const { execSync } = require('child_process');
const path = require('path');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Please provide a file path to build and run.');
  process.exit(1);
}

const tsFilePath = path.resolve(filePath);
const jsFilePath = path
  .join('dist', path.relative('src', tsFilePath))
  .replace(/\.ts$/, '.js');

try {
  execSync(
    `esbuild ${tsFilePath} --bundle --platform=node --outfile=${jsFilePath}`,
  );
  execSync(`node ${jsFilePath}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error building or running the file:', error.message);
  process.exit(1);
}
