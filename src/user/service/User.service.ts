import { Injectable } from "@nestjs/common";
import { UserRepository } from './../repository/User.repository';
import { UserDto, UserDataResponse } from '../types/User.DTO';
import { missingData } from '../handler/Missing.data';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    createUser = async (data: UserDto): Promise<UserDataResponse> => {
        try {
            const missingFields = missingData(data);
            if (missingFields.length > 0) {
                throw new Error(`Campos obrigatórios ausentes: ${missingFields.join(', ')}`);
            }

            const user = await this.userRepository.createUser(data);
            if (!user) throw new Error(`Erro ao criar usuário.`);
            return { Data: [user] };
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Erro: ${err.message}`);
            }
            throw err;
        }
    }

    updateUserById = async (id: number, data: UserDto): Promise<UserDataResponse> => {
        try {
            if (isNaN(id)) throw new Error(`O ID precisa ser um número`);
            if (!id) throw new Error(`Forneça o ID`);

            const missingFields = missingData(data);
            if (missingFields.length > 0) {
                throw new Error(`Campos obrigatórios ausentes: ${missingFields.join(', ')}`);
            }

            const updatedUser = await this.userRepository.updateUserById(id, data);
            if (!updatedUser) throw new Error(`Usuário com ID ${id} não encontrado.`);
            return { Data: [updatedUser] };
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Erro: ${err.message}`);
            }
            throw err;
        }
    }

    getUser = async (): Promise<UserDataResponse> => {
        try {
            const users = await this.userRepository.getUser();
            return { Data: users };
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Erro ao buscar usuários: ${err.message}`);
            }
            throw err;
        }
    }

    getUserById = async (id: number): Promise<UserDataResponse> => {
        try {
            if (isNaN(id)) throw new Error(`O ID precisa ser um número`);
            const user = await this.userRepository.getUserById(id);
            if (!user) throw new Error(`Usuário com ID ${id} não encontrado.`);
            return { Data: [user] };
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Erro ao buscar usuário: ${err.message}`);
            }
            throw err;
        }
    }

    deleteUserById = async (id: number): Promise<{ message: string }> => {
        try {
            if (isNaN(id)) throw new Error(`O ID precisa ser um número`);
            const deleted = await this.userRepository.deleteUser(id);
            if (!deleted) throw new Error(`Usuário com ID ${id} não encontrado.`);
            return { message: `Usuário com ID ${id} foi deletado com sucesso.` };
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Erro ao deletar usuário: ${err.message}`);
            }
            throw err;
        }
    }
}
