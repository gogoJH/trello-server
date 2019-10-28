import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  card_id: number;

  @Column()
  title: string;
}
