const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/images/inspiracion/pared/NUEVA PARED');
const targetDir = path.join(__dirname, '../public/images/inspiracion/pared');

async function convertImages() {
    try {
        const files = fs.readdirSync(sourceDir);
        console.log(`\nEncontrados ${files.length} archivos en NUEVA PARED\n`);

        const convertedFiles = [];

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();

            // Solo procesar imágenes
            if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
                console.log(`⏭️  Saltando: ${file} (no es una imagen PNG/JPG)`);
                continue;
            }

            const inputPath = path.join(sourceDir, file);
            const baseName = path.basename(file, ext);
            const outputFileName = `${baseName}.webp`;
            const outputPath = path.join(targetDir, outputFileName);

            console.log(`🔄 Convirtiendo: ${file} -> ${outputFileName}`);

            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            convertedFiles.push(outputFileName);
            console.log(`✅ Convertido: ${outputFileName}`);
        }

        console.log(`\n📦 Total de imágenes convertidas: ${convertedFiles.length}\n`);
        console.log('📋 Nombres de archivos generados:');
        convertedFiles.forEach(file => console.log(`   - '${file}',`));

        return convertedFiles;
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

convertImages();
