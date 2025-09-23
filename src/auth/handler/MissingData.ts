import { RegisterDTO } from './../types/Register.types';
import { LoginDTO } from "../types/Login.types"

export const missingDataRegister = (data: Partial<RegisterDTO>): string =>{
    try{
        let key: (keyof RegisterDTO)[] = ['name', 'secondname', 'email', 'age', 'password'];
        let missingFields: string[] = ["Campos faltando: \n"];
        for(let k of key){
            if(data[k] === undefined || data[k] === null || data[k] === '' ){
                missingFields.push(k);
            }
        }
        return missingFields.join(', ');
    }catch(err){
        throw err;
    }
}

export const missingDataLogin = (data: Partial<LoginDTO>): string =>{
    try{
        let key: (keyof LoginDTO)[] = ['email', 'senha'];
        let missingFields: string[] = ["Campos faltando:  \n"];
        for(let k of key){
            if(data[k] === undefined || data[k] === null || data[k] === '' ){
                missingFields.push(k);
            }
        }
        return missingFields.join(', ');
    }catch(err){
        throw err;
    }
}

