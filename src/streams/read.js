import { createReadStream } from "fs";
import { join, dirname } from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFiles = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const readFile = createReadStream(pathFiles, 'utf-8');
      
    readFile.on("data", (chunk) => {
        console.log(chunk)
    });     
  } catch (error) {
    console.log(error);
  }
};

await read();