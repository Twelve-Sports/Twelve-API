import { ClientEntity } from 'src/client/client.entity';
import { CourtEntity } from 'src/court/court.entity';
import { SportEntity } from 'src/sport/sport.entity';
import {
  Column,
  Entity,
  ManyToOne,
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

  @ManyToOne(() => SportEntity, (sport) => sport.id)
  sportSelect: SportEntity;

  @ManyToOne(() => ClientEntity, (client) => client.id)
  client: ClientEntity;

  @ManyToOne(() => CourtEntity, (court) => court.id)
  court: CourtEntity;
}
