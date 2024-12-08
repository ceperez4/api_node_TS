import { Response } from "express"
import { handleHttp } from "../helpers/error.handle"
import { RequestExt } from "../interface/req-ext";
import { Storage } from "../interface/storage.interface";
import { registerUpload } from "../services/storage";
import { deleteFile } from "../helpers/files.handle";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataUpload: Storage = {
            filename: `${file?.filename}`,
            path: `${file?.path}`,
            idUser: user?.id,

        }
        const response = await registerUpload(dataUpload);
        res.status(200).send(response);

    } catch (error) {
        if (req.file) await deleteFile(`${req.file.destination}/${req.file.filename}`);
        handleHttp(res, error, 'ERROR_GET_FILE');
    }
}


export {
    getFile
}