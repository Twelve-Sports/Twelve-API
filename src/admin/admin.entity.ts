import { UserEntity } from 'src/user/user.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'admin' })
export class AdminEntity extends UserEntity {
  @Column()
  isMaster: boolean;
}
