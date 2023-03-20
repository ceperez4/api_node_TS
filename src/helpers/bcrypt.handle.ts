import{hash,compare} from 'bcryptjs';

const encrypt = async(pass:string) =>{
    const passwordHash = await hash(pass,10);
    return passwordHash
}

const verified = async(pass:string,passHash:string) =>{
    const isCorrect = await compare(pass,passHash);
    return isCorrect; //return true/false
}


export {
    encrypt,
    verified
}