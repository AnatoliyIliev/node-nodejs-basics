import {readdir, readFile} from 'node:fs/promises';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const files = await readdir(`${__dirname}\\files`);

        if (!files.includes('fileToRead.txt')) {
            throw 'FS operation failed';
        }; 

        for (const file of files) {            

            if (file === 'fileToRead.txt') {
                const pathFile = join(__dirname, 'files', file);
                const contents = await readFile(pathFile, { encoding: 'utf8' });
                
                console.log(contents)
            }
        };
    } catch (error) {
        console.log(error);
    };
};

await read();