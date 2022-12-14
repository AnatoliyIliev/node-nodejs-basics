import { readFile } from 'node:fs/promises';
import {join,  dirname } from 'path';
const { createHash } = await import('node:crypto');
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const pathFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const contents = await readFile(pathFile, { encoding: 'utf8' });

        const hash = createHash('sha256').update(contents).digest('hex');

        console.log(hash);       
    } catch (error) {
        console.log(error)
    }
};

await calculateHash();