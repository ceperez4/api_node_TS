import {Schema,model} from 'mongoose';
import { User } from '../interface/user.interface';

const UserSchema = new Schema<User>({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:'N/A',
    }
},{
    timestamps:true,
    versionKey:false,
})

const UserModel = model<User>('user',UserSchema);

export default UserModel;