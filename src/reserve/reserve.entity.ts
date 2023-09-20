import { ClientEntity } from 'src/client/client.entity';
import { CourtEntity } from 'src/court/court.entity';
import { SportEntity } from 'src/sport/sport.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'reserve' })
export class ReserveEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  sportSelect: string;

  @ManyToOne(() => ClientEntity, (client) => client.id)
  client: ClientEntity;

  @OneToOne(() => CourtEntity)
  @JoinColumn({ name: 'court_id' })
  court: CourtEntity;
}
