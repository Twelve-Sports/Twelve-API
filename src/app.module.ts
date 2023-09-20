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
import { SportModule } from './sport/sport.module';
import { SportEntity } from './sport/sport.entity';
import { CourtEntity } from './court/court.entity';
import { courtModule } from './court/court.module';
import { clientModule } from './client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "test",
      password: "test",
      database: "postgres",
      entities: [
        UserEntity,
        ClientEntity,
        AdminEntity,
        ReserveEntity,
        SportEntity,
        CourtEntity,
      ],
      synchronize: true,
    }),
    userModule,
    adminModule,
    reserveModule,
    SportModule,
    courtModule,
    clientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
