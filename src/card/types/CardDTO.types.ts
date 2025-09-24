import { Card } from "../schema/CardEntity.schema";
import { cardTypeEnum } from "./CardEnum.enum";
import { cardRarityEnum } from "./CardEnum.enum";

export type CardDTO = {
    id: number;
    name: string;
    attack: number;
    defense: number;
    description: string;
    image: string | null;
    type: cardTypeEnum;
    rarity: cardRarityEnum
}





export type CardDtoResponse = {
    Data: CardDTO | CardDTO[];
}