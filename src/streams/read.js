import { createReadStream } from "fs";
import { join, dirname } from "path";
import { stdout } from "process";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFiles = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const readFile = createReadStream(pathFiles, 'utf-8');
      
    readFile.on("open", () => {
        readFile.pipe(stdout)
    });     
};

await read();