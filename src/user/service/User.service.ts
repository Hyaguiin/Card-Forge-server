import { UserRepository } from './../repository/User.repository';
import { UserDto } from '../types/User.DTO';
import { UserDataResponse } from '../types/User.DTO';
import { Injectable } from "@nestjs/common";
@Injectable()
export class UserService {
    constructor(private readonly userRepository : UserRepository ){

    }
    createUser = async(data: UserDto ): Promise<UserDataResponse>=>{
        try{
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
    updateUserById = async()=>{}
    getUser = async()=>{}
    getUserById = async()=>{}
    deleteUserById = async()=>{}

}