import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reserve' })
export class ReserveEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  password: string;

  @Column()
  sportSelect: string;
}
