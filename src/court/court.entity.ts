import { SportEntity } from 'src/sport/sport.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'court' })
export class CourtEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => SportEntity)
  @JoinTable()
  sports: SportEntity[];
}
