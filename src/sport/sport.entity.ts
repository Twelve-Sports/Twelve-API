import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sport' })
export class SportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
