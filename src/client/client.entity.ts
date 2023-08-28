import { UserEntity } from 'src/user/user.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class ClientEntity extends UserEntity {
  @Column()
  isVerified: boolean;

  @Column()
  isSocial: boolean;
}
