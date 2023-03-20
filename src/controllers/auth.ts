import { Request,Response } from "express"
import { handleHttp } from "../helpers/error.handle"
import { User } from "../interface/user.interface";
import {loginUser, registerNewUser} from '../services/auth'

const registerCtrl = async({body}:Request,res:Response)=>{
    try{
        const data : User = body;
       
        const responseUser = await registerNewUser(data);
        res.status(200).json(responseUser);

    }catch(error){
        handleHttp(res,error,'REGISTER_ERROR');
    }


}

const loginCtrl = async({body}:Request,res:Response)=>{
    try{
        const {email,password}= body;
       
        const responseUser = await loginUser({email,password});
        if(responseUser ==='PASSWORD_INCORRECT') {
            res.status(403).json(responseUser);
        }else{
            res.status(200).json(responseUser);
        }
       
    }catch(error){
        handleHttp(res,error,'LOGIN_ERROR');
    }
}


export {
    registerCtrl,
    loginCtrl
}