import { CardDTO } from "src/card/types/CardDTO.types";
import { UserDataResponse } from "./User.DTO";

export type UserWithCards = {
 user: UserDataResponse;
 cards: CardDTO[];    
}

export type UserWithCardsData = {
    user: UserWithCards;
}