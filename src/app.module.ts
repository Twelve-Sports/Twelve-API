import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { ClientEntity } from './client/client.entity';
import { AdminEntity } from './admin/admin.entity';
import { adminModule } from './admin/admin.module';
import { reserveModule } from './reserve/reverve.module';
import { ReserveEntity } from './reserve/reserve.entity';
import { sportModule } from './sport/sport.module';
import { SportEntity } from './sport/sport.entity';
import { CourtEntity } from './court/court.entity';
import { courtModule } from './court/court.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: '',
      database: 'PI',
      entities: [
        UserEntity,
        ClientEntity,
        AdminEntity,
        ReserveEntity,
        SportEntity,
        CourtEntity,
      ],
      synchronize: false,
    }),
    userModule,
    adminModule,
    reserveModule,
    sportModule,
    courtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
