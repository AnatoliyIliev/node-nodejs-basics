import { writeFile, readdir  } from 'fs/promises';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const create = async () => {     
    const pathFile = join(__dirname, 'files', 'fresh.txt');

    try {
        const files = await readdir(`${__dirname}\\files`);
        
        for (const file of files) {
            if (file === 'fresh.txt') {
                throw 'FS operation failed';
            }
        };

       await writeFile(pathFile, 'I am fresh and young', 'utf8', (err) => { if (err) { throw err } });
    } catch (error) {
        console.log(error);
    };
};

await create();