import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './schema/CardEntity.schema';
import { CardService } from './service/Card.service';
import { CardBattle } from './service/Card.battle.service';
import { CardController } from './controller/Card.controller';
import { Card_General_service } from './service';
import { UserModule } from 'src/user/user.module';
@Module({
    imports:[TypeOrmModule.forFeature([Card]), UserModule],
    providers:[CardService,CardBattle,Card_General_service],
    controllers:[CardController],
})

export class CardModule {}
