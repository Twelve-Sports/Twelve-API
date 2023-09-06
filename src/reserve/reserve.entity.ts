import { ClientEntity } from 'src/client/client.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => ClientEntity, (client) => client.id)
  client: ClientEntity;
}
