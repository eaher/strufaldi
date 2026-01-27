
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '../public/images/inspiracion');

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const outputName = path.basename(file, ext) + '.webp';
                const outputPath = path.join(directory, outputName);

                console.log(`Optimizing: ${file}...`);

                try {
                    await sharp(fullPath)
                        .resize({ width: 1920, withoutEnlargement: true }) // Resize huge images
                        .webp({ quality: 80 }) // Good balance of quality/size
                        .toFile(outputPath);

                    console.log(`Saved: ${outputName}`);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            }
        }
    }
}

console.log('Starting image optimization...');
processDirectory(TARGET_DIR)
    .then(() => console.log('Optimization complete!'))
    .catch(err => console.error('Fatal error:', err));
