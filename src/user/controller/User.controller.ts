import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../service/User.service';
import type { UserDto, UserDataResponse } from '../types/User.DTO';

@Controller('/api/user')
export class UserController {
  constructor(private readonly user: UserService) {}
  @Post('/')
  async createUserController(@Body() data: UserDto): Promise<UserDataResponse> {
    try {
      return await this.user.createUser(data);
    } catch (err) {
      throw new HttpException(`Error: ${err.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/')
  async getAllUserController() {
    try {
      return await this.user.getUser();
    } catch (err) {
      throw new HttpException(`Error: ${err.message}`, HttpStatus.NOT_FOUND);
    }
  }
  @Put('/:id')
  async updateUserController(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UserDto,
  ): Promise<UserDataResponse> {
    try {
      return await this.user.updateUserById(id, data);
    } catch (err) {
      throw new HttpException(
        `Error: ${err.message}`,
        HttpStatus.BAD_REQUEST || HttpStatus.NOT_FOUND,
      );
    }
  }
  @Get('/:id')
  async getUserByIdController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserDataResponse> {
    try {
      return await this.user.getUserById(id);
    } catch (err) {
      throw new HttpException(`Error: ${err.message}`, HttpStatus.NOT_FOUND);
    }
  }
  @Delete('/:id')
  async deleteUserController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    try {
      await this.user.getUserById(id);
      return { message: ' Usuário deletado com sucesso!' };
    } catch (err) {
      throw new HttpException(`Error: ${err.message}`, HttpStatus.NOT_FOUND);
    }
  }
}
