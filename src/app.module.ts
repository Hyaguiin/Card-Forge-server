import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { jwtService } from './jwt/jwt.utils';
import { AuthMiddleware } from './middleware/Auth.middleware';
import { CloudinaryService } from './cloudinary/index';
import env from './envClean/env.envalid';
import { CardService } from './card/service/Card.service';
import { CardRepository } from './card/repository/Card.repository';

//const devlopment = env.NODE_ENV == "development";
//const production = env.NODE_ENV == "production";
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // ⚠️ use false em produção
  }), CardModule, AuthModule, UserModule, 
  //services
],
  controllers: [AppController],
  providers: [AppService, jwtService, AuthMiddleware, CloudinaryService, CardService],
  exports: [jwtService, AuthMiddleware, CloudinaryService, CardService]  //vamos usar card para as demais lógicas de venda;
  
})
export class AppModule {}
