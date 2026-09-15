import fs from 'node:fs/promises';
import path from 'node:path';
import convert from 'heic-convert';

const imageDir = path.join(process.cwd(), 'public', 'images');
const outputDir = path.join(imageDir, 'converted');

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'converted') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function isHeic(buffer) {
  const signature = buffer.toString('ascii', 4, 12);
  return ['ftypheic', 'ftypheix', 'ftypmif1', 'ftypmsf1'].includes(signature);
}

await fs.mkdir(outputDir, { recursive: true });
const sourceFiles = await collectFiles(imageDir);
let convertedCount = 0;

for (const sourcePath of sourceFiles) {
  const source = await fs.readFile(sourcePath);
  if (!isHeic(source)) continue;

  const jpeg = await convert({ buffer: source, format: 'JPEG', quality: 0.9 });
  const outputName = `${path.parse(sourcePath).name}.jpg`;
  await fs.writeFile(path.join(outputDir, outputName), jpeg);
  convertedCount += 1;
}

console.log(`HEIC conversion complete: ${convertedCount} image(s) converted`);
