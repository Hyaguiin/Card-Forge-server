import { Module } from '@nestjs/common';
import { UserRepository } from './repository/User.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './schema/entity.schema';
import { UserController } from './controller/User.controller';
import { UserService } from './service/User.service';
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserRepository, UserService],
    controllers:[UserController],
    exports:[UserService]
})
export class UserModule {}
