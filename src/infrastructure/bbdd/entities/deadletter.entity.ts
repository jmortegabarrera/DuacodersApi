import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class DeadLetterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  message: string;

  @Column('json', { nullable: true })
  stackTrace: object | null;

  @Column()
  type: string;

  @Column()
  createdAt: Date;
}
