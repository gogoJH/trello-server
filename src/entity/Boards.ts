import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne
} from "typeorm";
import { Cards } from "./Cards";
import { Users } from "./Users";

@Entity()
export class Boards extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @OneToMany(
    type => Cards,
    cards => cards.boards
  )
  cards: Cards[];

  @ManyToOne(
    type => Users,
    users => users.boards
  )
  users: Users;
}

export default Boards;
