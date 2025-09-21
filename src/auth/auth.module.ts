import { Module } from '@nestjs/common';
import { AuthService } from './service/Auth.service';
import { AuthController } from './controller/Auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/schema/entity.schema';
import { UserModule } from 'src/user/user.module'; //
@Module({
    imports: [TypeOrmModule.forFeature([User]), UserModule],
    providers:[AuthService],
    controllers:[AuthController],
})
export class AuthModule {}
