import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { User } from "src/user/schema/entity.schema";
import { cardTypeEnum } from "../types/CardEnum.enum";
import { cardRarityEnum } from "../types/CardEnum.enum";

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('int')
    attack: number;

    @Column('int')
    defense: number;

    @Column({ type: 'varchar', nullable: true })
    image: string | null;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column('enum',{enum: ['MAGIC', 'SUMMON', 'TRAP'], default: 'MAGIC'})
    type: cardTypeEnum;


    @Column('enum', {enum: ['COMMONM', 'RARE', 'EPIC', 'LEGENDARY'], default: 'COMMONM'})
    rarity: cardRarityEnum

    @Column({ type: 'text', nullable: true })
    description: string;
    
    @JoinColumn({name: 'userId'})
    @OneToMany(()=> User, user => user.cards)
    user: User;
}
