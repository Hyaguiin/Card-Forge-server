import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './schema/CardEntity.schema';
import { CardService } from './service/Card.service';
import { CardController } from './controller/Card.controller';
@Module({
    imports:[TypeOrmModule.forFeature([Card])],
    providers:[CardService],
    controllers:[CardController],
})

export class CardModule {}
