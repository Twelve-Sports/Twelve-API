import { UserEntity } from 'src/user/user.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'client' })
export class ClientEntity extends UserEntity {
  @Column()
  isVerified: boolean;

  @Column()
  isSocial: boolean;
}
