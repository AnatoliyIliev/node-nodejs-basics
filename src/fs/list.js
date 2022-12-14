
import {readdir, rm} from 'node:fs/promises';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        const files = await readdir(`${__dirname}\\files`);

        if (!files) {
            throw 'FS operation failed';
        }; 

        for (const file of files) {
            console.log(file)
        };
    } catch (error) {
        console.log(error);
    };
};

await list();