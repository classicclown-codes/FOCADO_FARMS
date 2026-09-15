import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const imageDir = path.join(publicDir, 'images');
const videoDir = path.join(publicDir, 'videos');
const outputPath = path.join(root, 'lib', 'generated-media.ts');

function collectFiles(dir, extensions) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return collectFiles(fullPath, extensions);
      }

      if (entry.isFile() && extensions.includes(path.extname(entry.name).toLowerCase())) {
        return [`/${path.relative(publicDir, fullPath).split(path.sep).join('/')}`];
      }

      return [];
    })
    .sort();
}

function isBrowserImage(filePath) {
  const header = Buffer.alloc(12);
  const handle = fs.openSync(filePath, 'r');
  try {
    fs.readSync(handle, header, 0, header.length, 0);
  } finally {
    fs.closeSync(handle);
  }

  const signature = header.toString('ascii', 4, 12);
  return !['ftypheic', 'ftypheix', 'ftypmif1', 'ftypmsf1'].includes(signature);
}

const imageFiles = collectFiles(imageDir, ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.bmp', '.jfif'])
  .filter((file) => !/\/logo\.[^/]+$/i.test(file))
  .filter((file) => isBrowserImage(path.join(publicDir, file.slice(1))));
const allVideoFiles = collectFiles(videoDir, ['.mp4', '.webm', '.mov', '.ogg']);
const optimizedVideoNames = new Set(allVideoFiles.filter((file) => file.includes('/optimized/')).map((file) => path.basename(file)));
const videoFiles = allVideoFiles.filter((file) => !optimizedVideoNames.has(path.basename(file)) || file.includes('/optimized/'));

const heroImage = imageFiles.find((file) => /hero|cover|banner/i.test(file)) ?? imageFiles[0] ?? '';
const breedGalleryImages = imageFiles.filter((file) => /breed|pig|stock|animal/i.test(file)).slice(0, 3);
const selectedBreedImages = breedGalleryImages.length >= 3 ? breedGalleryImages : imageFiles.slice(0, 3);
const galleryOnlyImages = imageFiles.filter((file) => !/hero|banner|cover/i.test(file));

const content = `export const heroImage = ${JSON.stringify(heroImage)};
export const breedGalleryImages = ${JSON.stringify(selectedBreedImages)};
export const galleryOnlyImages = ${JSON.stringify(galleryOnlyImages)};
export const uploadedVideos = ${JSON.stringify(videoFiles)};
`;

fs.writeFileSync(outputPath, content, 'utf8');
console.log(`Media manifest generated: ${imageFiles.length} image(s), ${videoFiles.length} video(s)`);
