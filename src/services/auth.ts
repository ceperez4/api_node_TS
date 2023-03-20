
import { encrypt, verified } from "../helpers/bcrypt.handle";
import { generateToken } from "../helpers/jwt.handle";
import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface"
import UserModel from "../models/user"

const registerNewUser =async ({email,password,name}:User) =>{
    
    const checkIs = await UserModel.findOne({email})
    if(checkIs) return 'USER_EXIST';
    const passHash = await encrypt(password);
    const newUser = await UserModel.create({
        email,
        name,
        password:passHash,
    });
    return newUser;
}

const loginUser =async ({email,password}:Auth) =>{
    const checkIs = await UserModel.findOne({email})
    if(!checkIs) return 'NOT_FOUND_USER';
    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return 'PASSWORD_INCORRECT';

    const token = generateToken(checkIs.email);
    const data={
        token,
        user:checkIs
    }
    return data;
}

export {
    registerNewUser,
    loginUser
}