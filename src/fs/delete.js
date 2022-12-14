import {readdir, rm} from 'node:fs/promises';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const remove = async () => {
    try {
        const files = await readdir(`${__dirname}\\files`);

        if (!files.includes('fileToRemove.txt')) {
            throw 'FS operation failed';
        }; 

        for (const file of files) {
            const pathFile = join(__dirname, 'files', file);

            if (file === 'fileToRemove.txt') {
                await rm(pathFile)
            }
        };
    } catch (error) {
        console.log(error);
    };
};

await remove();