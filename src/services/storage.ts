import { Storage } from "../interface/storage.interface"
import StorageModel from "../models/storage"

const registerUpload = async({filename,idUser,path}:Storage) =>{

    const fileCreate = await StorageModel.create({filename,idUser,path});
    return fileCreate;
}


export{
registerUpload
}