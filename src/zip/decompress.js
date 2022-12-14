import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from "fs";
import { join, dirname } from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathInput = join(__dirname, "files", "archive.gz");
const pathOutput= join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
    const unzip  = createUnzip();
    const input= createReadStream(pathInput);
    const output = createWriteStream(pathOutput);
    
    input.pipe(unzip).pipe(output)
};

await decompress();