import { ReserveEntity } from 'src/reserve/reserve.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'client' })
export class ClientEntity extends UserEntity {
  @Column()
  isVerified: boolean;

  @Column()
  isSocial: boolean;

  @OneToMany(() => ReserveEntity, (reserve) => reserve.client)
  reserves: ReserveEntity[];
}
