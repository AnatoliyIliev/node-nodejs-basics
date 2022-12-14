import { createWriteStream } from "fs";
import { join, dirname } from "path";
import { stdin } from "process";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFiles = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const readFile = createWriteStream(pathFiles, "utf-8");
  stdin.pipe(readFile);
};

await write();
