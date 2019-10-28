import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Boards extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public user_id: number;

  @Column()
  public title: string;
}

export default Boards;
