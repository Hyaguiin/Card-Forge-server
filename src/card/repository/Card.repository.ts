import { Card } from "../schema/CardEntity.schema";
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CardRepository{
    private readonly repo: Repository<Card>;
    constructor(private readonly dataSouce: DataSource){
        this.repo = this.dataSouce.getRepository(Card);
    }

    createCard = async(dataSource: Partial<Card>): Promise<Card> => {
        const card = await this.repo.create(dataSource);
        return card;
    }
    
    
    updateCard = async(id: number, dataSource: Partial<Card>): Promise<Card>=>{
        const card = await this.getCardById(id);
        await this.repo.update(id, dataSource);
        if(!card) throw new Error(`Forneça um card`);
        return card;
    }


    getAllCard = async(): Promise<Card[]> =>{
        const card = await this.repo.find();
        return card;
    }

    getCardById = async(id: number): Promise<Card> => {
       const card = await this.repo.findOneBy({id});
       if(!id) throw new Error(`Id Faltando`);
       if(!card) throw new Error(`Forneça um card`);
       return card;
    }

    //tbm da pra usar void, mas assim nao retornaria o card;
    deleteCardByID = async(id: number): Promise<Card>=>{
        const card = await this.getCardById(id);
        if(!card) throw new Error(`Id não existe`);
        await this.repo.delete({id});
        return card;
    }
    
}