import fs, { constants } from 'node:fs/promises';
import path from 'node:path';

export const createFolder = async (directoryPath: string) => {
    try {
        const fullPath = path.resolve(directoryPath);
        await fs.access(fullPath, constants.W_OK);
    } catch {
        await fs.mkdir(directoryPath, { recursive: true });
    }
};

export const deleteFile = async (path: string) => {
    try{
        await fs.access(path, constants.W_OK);
        await fs.unlink(path);
    }catch(e){
        console.error(`File not found: ${path}`, e)
    }
}