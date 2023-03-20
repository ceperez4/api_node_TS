import {Response, NextFunction } from "express"
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../helpers/jwt.handle";
import { RequestExt } from "../interface/req-ext";

const checkJwt = (req:RequestExt,res:Response,next:NextFunction )=>{
try{
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as JwtPayload | {id:string};
    if(!isUser){
        res.status(401)
        res.send("TOKEN_INVALID");
    }else{
        req.user = isUser;
        next();

    }

}catch(error){
    res.status(400)
    res.send("SESSION_INVALID");
}
}

export {
    checkJwt
}