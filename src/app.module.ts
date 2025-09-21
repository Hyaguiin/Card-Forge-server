import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { jwtService } from './jwt/jwt.utils';
import env from './envClean/env.envalid';

const devlopment = env.NODE_ENV == "development";
const production = env.NODE_ENV == "production";
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: devlopment, // ⚠️ use false em produção
  }), CardModule, AuthModule, UserModule, 
  //services
],
  controllers: [AppController],
  providers: [AppService, jwtService],
  
})
export class AppModule {}
