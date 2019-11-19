import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Boards from "./Boards";
import { List } from "./List";

@Entity()
export class Cards extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(
    type => Boards,
    boards => boards.cards
  )
  boards: Boards;

  @OneToMany(
    type => List,
    list => list.cards
  )
  list: List[];
}
