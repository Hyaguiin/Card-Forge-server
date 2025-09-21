import { DataSource, Repository } from "typeorm";
import { User } from "../schema/entity.schema";
import { Injectable } from "@nestjs/common";

export class UserService{
    private readonly userRepo: Repository<User>;
    constructor(private readonly dataSource: DataSource){
        this.userRepo = this.dataSource.getRepository(User);
    }
    createUser = async(data: Partial<User>): Promise<User>=>{
            if(!data)   throw new Error(`Forneça o corpo o usuário`);
            const user = await this.userRepo.create(data);
            return await this.userRepo.save(user);
    }

    getUser = async():Promise<User[]> =>{
        const user = await this.userRepo.find();
        if(user.length === 0) throw new Error(`Nenhum usuário encontrado`);
        return user;
    }
    
    getUserById = async(id: number): Promise<User> =>{
        if(!id)  throw new Error(`Forneça o id`);
        if(isNaN(id))throw new Error(`Forneça Um número!`);
        const user = await this.userRepo.findOneBy({id});
        if(!user) throw new Error(`Usuário não encontrado!`)
        return user;
    }

    updateUserById = async(id: number, data: Partial<User>): Promise<User>=>{
        const userFind = await this.getUserById(id);
        await this.userRepo.update(id, data)
        await this.getUserById(id);
        return userFind;
    }

    deleteUser = async(id: number): Promise<Boolean> =>{
        let userDelete = false;
        const userFind = await this.getUserById(id);
        await this.userRepo.delete(id);
        if(userFind){
            userDelete = true;
        }
        return userDelete;
    }
}