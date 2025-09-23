import * as bcrypt from 'bcrypt';

export const hashPasswor = async(password: string, salt?: string):Promise<string>=>{
    try{
        let salt = await bcrypt.genSalt(10);
        let passwordDecode = await bcrypt.hash(password, salt);
        password = passwordDecode;
        console.log(`Senha hash:${passwordDecode} ` );
        return passwordDecode;
    }catch(err){
        throw err;
    }
}


/*
    export const genSalt = async(salt: string):Promise<string> =>{
        try{
            let salt = await bcrypt.genSalt(10);
            return salt;
        }catch(err){
        throw err;
    }
    }*/