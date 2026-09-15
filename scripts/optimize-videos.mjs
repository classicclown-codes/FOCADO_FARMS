import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';

const videosDir = path.join(process.cwd(), 'public', 'videos');
const outputDir = path.join(videosDir, 'optimized');
const videoNames = ['farm-tour.mp4', 'breed1.mp4', 'breed2.mp4', 'breed3.mp4'];

fs.mkdirSync(outputDir, { recursive: true });

for (const name of videoNames) {
  const inputPath = path.join(videosDir, name);
  const outputPath = path.join(outputDir, name);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipped missing video: ${name}`);
    continue;
  }

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).mtimeMs >= fs.statSync(inputPath).mtimeMs) {
    continue;
  }

  const result = spawnSync(ffmpegPath, [
    '-y',
    '-i', inputPath,
    '-vf', 'scale=w=1280:h=720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '28',
    '-pix_fmt', 'yuv420p',
    '-an',
    '-movflags', '+faststart',
    outputPath,
  ], { stdio: 'inherit' });

  if (result.status !== 0) {
    throw new Error(`FFmpeg failed for ${name}`);
  }
}

console.log('Video optimization complete');
