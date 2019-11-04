import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cards } from "./Cards";

@Entity()
export class Boards extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public user_id: number;

  @Column()
  public title: string;

  @OneToMany(type => Cards, cards => cards.board_id)
  cards: Cards[];
}

export default Boards;
