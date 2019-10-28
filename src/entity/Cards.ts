import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cards extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  board_id: number;

  @Column()
  title: string;
}
