import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'court' })
export class CourtEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
