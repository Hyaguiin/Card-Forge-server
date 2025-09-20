import { Injectable } from '@nestjs/common';
import { CardRepository } from '../repository/Card.repository';
import { CardDTO, CardDtoResponse } from '../types/CardDTO.types';

@Injectable()
export class CardService{
   
    constructor( private readonly cardRepo: CardRepository){

    }

    createCardService = async(data: CardDTO):Promise<CardDtoResponse> =>{
        try{
            const card = await this.cardRepo.createCard(data);
            if(!card) throw new Error(`Forneça um card`);
            return card;
        }catch(err){
            if(err instanceof Error){
                throw new Error(`${err.message}`);
            }
            throw err;
        }
    }


    updateCardService = async(id: number, data: CardDTO): Promise<CardDtoResponse> =>{
        try{
            const find = await this.cardRepo.getCardById(id);
            if(!find) throw new Error(`Id não existe ou card não existe`);
            const card = await this.cardRepo.updateCard(id, data);
            if(!card) throw new Error(`Forneça o card`);
            return card;
        }catch(err){
            if(err instanceof Error){
                throw new Error(`Error: ${err.message}`);
            }
            throw err;
        }
    }

    getCardByID = async(id: number): Promise<CardDtoResponse>=>{
        try{
            const card = await this.cardRepo.getCardById(id);
            if(!id) throw new Error(`Forneça o id!`);
            return card;
        }catch(err){
            if(err instanceof Error){

                throw new Error(`Error: ${err.message}`);
            } 
            throw err;
        }
    }
    
}