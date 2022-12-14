import { sep, dirname, join } from 'node:path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'node:fs/promises';
import url from 'url';
import './files/c.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const aFile = join(__dirname, 'files', 'a.json');
const bFile = join(__dirname, 'files', 'b.json');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await readFile(aFile, { encoding: 'utf8' }));
} else {
    unknownObject = JSON.parse(await readFile(bFile, { encoding: 'utf8' }));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


export { unknownObject,  myServer};
