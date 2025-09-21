import { Module } from '@nestjs/common';
import { UserRepository } from './repository/User.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './schema/entity.schema';
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserRepository],
    controllers:[]
})
export class UserModule {}
