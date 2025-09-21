import * as bcrypt from 'bcrypt';

export const hashPasswor = async(password: string, salt?: string):Promise<string>=>{
    try{
        if(!salt) throw new Error(``);
        let hashPassw = await bcrypt.hash(password, salt);
        return hashPassw;
        
    }catch(err){
        throw err;
    }
}

    export const genSalt = async(salt: string):Promise<string> =>{
        try{
            let salt = await bcrypt.genSalt(10);
            return salt;
        }catch(err){
        throw err;
    }
    }