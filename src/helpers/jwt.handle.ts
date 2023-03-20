import {sign, verify} from 'jsonwebtoken';
import{JWT_SECRET} from '../config/config';

const generateToken = (id:string) =>{

    const jwt = sign({id},JWT_SECRET,{
        expiresIn:"2h"
    });
    return jwt;
}


const verifyToken = (token:string) =>{
    const isCorrect = verify(token,JWT_SECRET);
    return isCorrect;
}


export {
    generateToken, 
    verifyToken
}