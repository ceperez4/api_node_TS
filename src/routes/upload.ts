import { Router } from "express";
import { getFile } from "../controllers/upload";
import { checkJwt } from "../middlewares/session";
import { singleUpload } from '../middlewares/files/upload'
import { usersStorage } from '../middlewares/files/storage'
import { imageFilter } from '../middlewares/files/filters'

const router = Router();

router.post('/', checkJwt, singleUpload({
    field: 'file',
    fileSize: 3 * 1024 * 1024,
    fileStorage: usersStorage,
    filter: imageFilter,
    isRequired: false
}), getFile);


export {
    router
}