import { UserService } from "./User.service";
import { CardBattle } from "src/card/service/Card.battle.service";
import { UserWithCardsData } from "../types/User-WithCards";
import { CardDTO } from "src/card/types/CardDTO.types";
export class UserControll {
        private readonly card_battle: CardBattle;
    constructor(private readonly userService: UserService){
        
    }

   /* getCardsPerUserRound1 = async(userId: number): Promise<UserWithCardsData> =>{
        try{
            let cardArray: CardDTO[] = [];
            const user = await this.userService.getUserById(userId);
            if(!user) throw new Error(`Usuário com id ${userId} não encontrado!`);
            const card = await this.card_battle.getCardByRound([1]) || await this.card_battle.getCardByRound([2,3,4,5]) ;
            cardArray = card;
            const userCards: UserWithCardsData = {
                 user: {user: user,
                  cards: cardArray
            }}
            return userCards;
        }catch(err){
            if (err instanceof Error) {
                throw new Error(`Error: ${err.message}`);
              }
              throw err;
            }
    }*/
    
    getCardsPerUserByRounds = async (userId: number, rounds: number[]): Promise<UserWithCardsData> => {
  try {
    const user = await this.userService.getUserById(userId);
    if (!user) throw new Error(`Usuário com id ${userId} não encontrado!`);

    const cards = await this.card_battle.getCardByRound(rounds);

    return {
      user: {
        user: user,
        cards: cards
      }
    };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error: ${err.message}`);
    }
    throw err;
  }
}


}