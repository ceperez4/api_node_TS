import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middlewares/multer";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.post('/',checkJwt,multerMiddleware.single('file'),getFile);


export {
    router
}