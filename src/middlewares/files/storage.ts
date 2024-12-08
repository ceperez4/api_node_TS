import multer from 'multer';
import path from 'path';
import crypto from 'node:crypto';

const createDiskStorage = (destinationPath: string, filenamePrefix = '') => multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, destinationPath);
    },
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${filenamePrefix}${crypto.randomUUID()}${ext}`);
    },
});

export const usersStorage = createDiskStorage('src/public/uploads');