import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Boards from "./Boards";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    unique: true
  })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @OneToMany(
    type => Boards,
    boards => boards.users
  )
  boards: Boards[];
}
