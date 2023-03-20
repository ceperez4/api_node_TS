import { NextFunction, Request,Response } from "express"

const logMiddleware = (_req:Request, _res:Response,next:NextFunction)=>{
    console.log('sdsdsd');
    next();
}


export {
    logMiddleware
}