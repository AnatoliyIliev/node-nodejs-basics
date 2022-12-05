import { Worker } from 'node:worker_threads';
import { cpus } from 'os';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const workerFile = join(__dirname, 'worker.js');
    const systemCpuCores = cpus();

    const result = systemCpuCores.map((_, idx) => {
        const worker = new Worker(workerFile, { workerData: 10 + idx })
       
        return new Promise((resolve) => {
            worker.on('message', data => { resolve({ status: 'resolved', data }) });
            worker.on('error', () => { resolve({ status: 'error', data: null }) });
        })
    });
    
    console.log(await Promise.all(result))
};

await performCalculations();