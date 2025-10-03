import { Injectable } from '@nestjs/common';
import { CardService } from './Card.service';
import { UserService } from 'src/user/service/User.service';
import { CardDTO } from '../types/CardDTO.types';
@Injectable()
export class CardBattle {
  private readonly user_service: UserService;
  constructor(private readonly card_Service: CardService) {
    
  }
  randomCardFive = async (): Promise<CardDTO[]> => {
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

  getRandomCard = async(): Promise<CardDTO>=>{
    try{
      const card = await this.card_Service.getAllCards();
      const cardResponse = card;
      const randomCard = Math.floor(Math.random() * card.length);
      return cardResponse[randomCard];  
    }catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error: ${err.message}`);
      }
      throw err;
    }
  };



   getCardByRound = async (rounds: number[]): Promise<CardDTO[]> => {
  const first_round: number = rounds[0]; 
  const rest_rounds: number[] = rounds.slice(1); 

  const cardsArray: CardDTO[] = [];

  try {
    if (isNaN(first_round)) {
      throw new Error(`O first_round deve ser um número`);
    }

    if (rounds.length === 1 && first_round === 1) {
      const firstCards = await this.randomCardFive(); 
      cardsArray.push(...firstCards);
    }

    for (const round of rest_rounds) {
      if (isNaN(round)) {
        throw new Error(`Round inválido: ${round}`);
      }
      const singleCard = await this.getRandomCard();
      cardsArray.push(singleCard);
    }

    return cardsArray;

  } catch (err) {
    throw new Error(`Erro: ${(err as Error).message}`);
  }
};

  startBattle = async(rounds: number[], userId: number): Promise<CardDTO[]>=>{
      let round: number[] = rounds;
      let rest_rounds: number[] = round.slice(1);
    try{
      const users = await this.user_service.getUserById(userId);
      

    }catch(err){
      if (err instanceof Error) {
        throw new Error(`Error: ${err.message}`);
      }
      throw err;
    }
  }

}

