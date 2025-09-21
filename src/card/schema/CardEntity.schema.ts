import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { User } from "src/user/schema/entity.schema";

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

    @JoinColumn({name: 'userId'})
    @OneToMany(()=> User, user => user.cards)
    user: User;
}
