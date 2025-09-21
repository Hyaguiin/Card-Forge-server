import { UserRepository } from './../repository/User.repository';
import { UserDto } from '../types/User.DTO';
import { UserDataResponse } from '../types/User.DTO';
import { Injectable } from "@nestjs/common";
import { missingData } from '../handler/Missing.data';
@Injectable()
export class UserService {
    constructor(private readonly userRepository : UserRepository ){

    }
    createUser = async(data: UserDto ): Promise<UserDataResponse>=>{
        try{
            missingData(data);
            const user =  await this.userRepository.createUser(data);
            if(!data)throw new Error(`Forneça um corpo`);
            return {Data: [user]};
        }catch(err){
            if(err instanceof Error){
                throw new Error(`Error: ${err.message}`);
            }
            throw err;
        }
    }
    updateUserById = async(id: number, data: UserDto): Promise<UserDataResponse>=>{
        try{
               missingData(data);
            if(isNaN(id))throw new Error(`o id precisa ser um número`);
            if(!id)throw new Error(`Forneça o id`);
        }catch(err){
            if(err instanceof Error){
                throw new Error(`Error: ${err.message}`);
            }
            throw err;
        }
    }
    getUser = async()=>{}
    getUserById = async()=>{}
    deleteUserById = async()=>{}

}