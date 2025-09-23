import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/service/User.service";
import { jwtService } from "src/jwt/jwt.utils";
import { RegisterDTO } from "../types/Register.types";
import { UserDataResponse, UserDto } from "src/user/types/User.DTO";
import { LoginDTO, LoginResponse } from "../types/Login.types";
import { jwt_payload } from "src/jwt/jwt.payload";
import { missingDataLogin, missingDataRegister } from "../handler/MissingData";

@Injectable()
export class AuthService{
    private readonly jwt: jwtService;
    constructor(private readonly userService: UserService){}

    register = async(data: RegisterDTO): Promise<RegisterDTO>=>{
        try{
            missingDataRegister(data);
            const userResponse: UserDataResponse = await this.userService.createUser(data);
            const user: UserDto = userResponse.Data[0];
            return user;
        }catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error: ${err.message}`);
      }
      throw err;
    }
    }

   login = async (data: LoginDTO): Promise<LoginResponse> => {
  try {
    missingDataLogin(data);
    if (!data.id) throw new Error(`Usuário não encontrado`);
    const userResponse: UserDataResponse = await this.userService.getUserById(data.id);
    const userData = userResponse.Data[0];
    if (!userData) {
      throw new Error('Usuário não encontrado no banco');
    }
    const user: LoginDTO = {
      id: data.id,
      email: userData.email,
      senha: data.senha 
    };

    const payload: jwt_payload = {
      id: data.id,
      email: data.email,
    };
    const token: string = await this.jwt.generateJwt(payload); 
    return { user, token };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error: ${err.message}`);
    }
    throw err; 
  }
};
    
}