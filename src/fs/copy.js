import { copyFile, readdir, mkdir} from 'fs/promises';
import {join,  dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

const copy = async () => {
    try {
        const fsFolder = await readdir(__dirname);
        const pathFiles = join(__dirname, 'files'); 
        const pathFolderCopy = join(__dirname, 'files_copy');        

        if (!fsFolder.includes('files') || fsFolder.includes('files_copy')) {
            throw 'FS operation failed';
        }; 
        
        const files = await readdir(pathFiles);   
        
        await mkdir(pathFolderCopy, (err) => { if (err) { throw err } });         

        for (const file of files) {
            const pathFile = join(__dirname, 'files', file);
            const pathFileCopy = join(pathFolderCopy, file);

            await copyFile(pathFile, pathFileCopy);
        };
    } catch (error) {
        console.log(error);
    };
};

copy();