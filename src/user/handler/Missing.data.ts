import { UserDto } from './../types/User.DTO';
import { keyof, includes } from "zod";

export const missingData = (data: Partial<UserDto>): string[]=>{
    let missingFields: string[] = ["*Campos Faltando:* \n "];

    try{
        let key: (keyof UserDto)[] = ['name', 'secondname','email', 'age', 'password'];
        for(let k of key){
            if(data[k] === null || data[k] === undefined || data[k] === ''){
                missingFields.push(k);
            }
        }
        return missingFields;
    }catch(err){
        if(err instanceof Error){
            throw new Error(` Error: ${err.message}`);
        }
        throw err;
    }
}