import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import Boards from "./Boards";

@Entity()
export class Cards extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  board_id: number;

  @Column()
  title: string;

  @ManyToOne(type => Boards, boards => boards.id)
  boards: Boards;
}
