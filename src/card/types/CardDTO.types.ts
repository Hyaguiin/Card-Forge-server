
export type CardDTO = {
    id: number;
    name: string;
    attack: number;
    defense: number;
    image: string | null;
}


export type CardDtoResponse = {
    name: string;
    attack: number;
    defense: number;
    image: string | null;
}