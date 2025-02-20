import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DeadLetterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column('json',{ nullable: true })
  stackTrace: object | null;

  @Column()
  type: string;

  @Column()
  createdAt: Date;
}
