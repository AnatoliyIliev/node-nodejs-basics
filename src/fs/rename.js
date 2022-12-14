import fs, {readdir} from 'node:fs/promises';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const rename = async () => {
    try {
        const files = await readdir(`${__dirname}\\files`);

        if (!files.includes('wrongFilename.txt') || files.includes('properFilename.md')) {
            throw 'FS operation failed';
        }; 

        for (const file of files) {
            const pathFile = join(__dirname, 'files', file);
            const pathNewFile = join(__dirname, 'files', 'properFilename.md');

            if (file === 'wrongFilename.txt') {
                await fs.rename(pathFile, pathNewFile);
            }
        };
    } catch (error) {
        console.log(error);
    }
};

await rename();