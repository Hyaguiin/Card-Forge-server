import { Card } from "../schema/CardEntity.schema";

export type CardDTO = {
    id: number;
    name: string;
    attack: number;
    defense: number;
    image: string | null;
    type: string;
}


export type CardDtoResponse = {
    Data: CardDTO | CardDTO[];
}