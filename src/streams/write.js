import { createWriteStream } from "fs";
import { join, dirname } from "path";
import { stdin, stdout } from 'process';
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFiles = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const readFile = createWriteStream(pathFiles, 'utf-8');

    stdout.write(
        'Hello! Write what you want and press "Strl - С" or "exit" to exit. Thank you.\n',
    );

    stdin.on('data', data => {
        if (data.toString().trim() === 'exit') {
            process.exit();
        } else {
            readFile.write(data.toString());
        }
    });

    process.on('SIGINT', () => process.exit());
    process.on('exit', () => {
        console.log('\nGood luck');
    });
};

await write();