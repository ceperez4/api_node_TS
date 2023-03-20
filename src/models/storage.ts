import { Schema,model } from "mongoose";
import { Storage } from "../interface/storage.interface";

const UserSchema = new Schema<Storage>({
    filename:{
        type:String
    },
    path:{
        type:String
    },
    idUser:{
        type:String
    }
},{
    timestamps:true,
    versionKey:false,
})


const StorageModel = model<Storage>('storage',UserSchema);

export default StorageModel;