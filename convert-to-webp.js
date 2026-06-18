const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folder = './public/assets/ramcobgs/';
const quality = 75;
const minSizeKB = 100; // Only convert files larger than 100KB

console.log(`🔄 Converting images larger than ${minSizeKB}KB to WebP...\n`);

const files = fs.readdirSync(folder).filter(file =>
  /\.(jpg|jpeg)$/i.test(file)
);

let converted = 0;
let skipped = 0;

files.forEach((file) => {
  const inputPath = path.join(folder, file);
  const fileSizeKB = fs.statSync(inputPath).size / 1024;

  // Skip small files
  if (fileSizeKB < minSizeKB) {
    console.log(`⏭️  Skipping ${file} (${fileSizeKB.toFixed(1)}KB - already small)`);
    skipped++;
    return;
  }

  const outputPath = path.join(folder, file.replace(/\.(jpg|jpeg)$/i, '.webp'));

  sharp(inputPath)
    .webp({ quality: quality })
    .toFile(outputPath)
    .then(() => {
      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(outputPath).size;

      if (webpSize < originalSize) {
        console.log(`✅ ${file}: ${(originalSize/1024).toFixed(1)}KB → ${(webpSize/1024).toFixed(1)}KB`);
        converted++;
      } else {
        console.log(`⏭️  ${file}: WebP larger, keeping JPG`);
        fs.unlinkSync(outputPath);
        skipped++;
      }
    })
    .catch(err => console.error(`❌ Error: ${file}`, err.message));
});
