import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from "fs";
import { join, dirname } from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathInput = join(__dirname, "files", "fileToCompress.txt");
const pathOutput = join(__dirname, "files", "archive.gz");

const compress = async () => {
    const gzip = createGzip();
    const input = createReadStream(pathInput);
    const output = createWriteStream(pathOutput);
    
    input.pipe(gzip).pipe(output)

};

await compress();