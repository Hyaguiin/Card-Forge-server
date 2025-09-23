import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/Auth.service';
import type { RegisterDTO } from '../types/Register.types';
import type { LoginDTO, LoginResponse}   from '../types/Login.types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto:  RegisterDTO) {
    const user = await this.authService.register(registerDto);
    return { message: 'Usuário registrado com sucesso', user };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDTO): Promise<LoginResponse> {
    const result = await this.authService.login(loginDto);
    return result;
  }
}
