import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('name')
    name: string

    @Column('attack')
    attack: number;

    @Column('defense')
    defense: number;


    @Column('image')
    image: string | null;


    @Column({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}