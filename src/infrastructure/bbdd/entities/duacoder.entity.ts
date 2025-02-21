import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('duacoders')
@Unique(['nif'])
export class DuacoderEntity {
  @PrimaryColumn()
  nif: string;

  @Column()
  name: string;

  @Column()
  biography?: string;

  @Column()
  department: string;

  @Column()
  position: string;

  @Column('simple-array')
  skills: string[];

  @Column()
  photoUrl?: string;

  @Column()
  likesOnionTortilla: boolean;

  @Column({ nullable: true })
  birthDate?: Date;
}
