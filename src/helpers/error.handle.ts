import {Response} from 'express';
const handleHttp = (res:Response,error:any,errorMessage:string)=>{
    console.log(error);
    res.status(500);
    res.send({error:errorMessage});
}

export {handleHttp}
