import { CardDTO } from "../types/CardDTO.types";

export const missingData= (data: Partial<CardDTO>): string[]=>{
    try{
        let missingFields: string[] = ["*Campos Faltando:* \n "];
        let k: (keyof CardDTO)[] = ['name', 'attack', 'defense', 'image', 'type', 'rarity', 'description'];
        for(let key of k){
            if(data[key] === undefined || data[key] === null || data[key] === '' ){
                missingFields.push(key);
            }
        }
        return missingFields;
    }catch(err){
        throw err;
    }

}
    
