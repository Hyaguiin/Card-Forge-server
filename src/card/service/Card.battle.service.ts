import { Injectable } from '@nestjs/common';
import { CardService } from './Card.service';
import { CardDTO } from '../types/CardDTO.types';
@Injectable()
export class CardBattle {
  constructor(private readonly card_Service: CardService) {}
  randomCard = async (): Promise<CardDTO[]> => {
    let randomCardsArray: CardDTO[] = [];
    try {
      const card = await this.card_Service.getAllCards();
      const cardsReponse = card;
      if (card.length > 0) {
        for (let i = 0; i < 5; i++) {
          const randomCard = Math.floor(Math.random() * card.length);
          randomCardsArray.push(cardsReponse[randomCard]);
        }
        if(card.length < 0)throw new Error(`Array vazio!`);
      }

      return randomCardsArray;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error: ${err.message}`);
      }
      throw err;
    }

    
  };

    

}


