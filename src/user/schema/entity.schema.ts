import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')        
  name: string;

  @Column('varchar')
  secondname: string;

  @Column('varchar')
  email: string;

  @Column('int')
  age: number;

  @Column('varchar')
  password: string;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  lastLogged: Date;

  @Column({ type: 'boolean', default: false })
  isLogged: boolean;
}
