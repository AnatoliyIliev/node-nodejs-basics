import { fork, spawn } from 'node:child_process';

import { join, dirname } from 'path';
import { argv } from 'node:process';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const scriptFile = join(__dirname, 'files', 'script.js');

    const child = spawn('node', [scriptFile, ...args])

    process.stdin.on('data', data => {
        console.log('Data to child -> ', data.toString())
        child.stdin.write(data)
    });

    child.stdout.on('data', data => {
        console.log('Child stdout -> ', data.toString())
    });

    child.on('error', error => {
        console.log(error)
    });

    child.on('close', code => {
        console.log(`child process exited with code ${code}`);
        process.exit()
    });
};

spawnChildProcess(argv);