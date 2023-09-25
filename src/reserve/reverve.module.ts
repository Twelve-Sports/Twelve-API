import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReserveEntity } from './reserve.entity';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { ClientEntity } from 'src/client/client.entity';
import { CourtEntity } from 'src/court/court.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReserveEntity, ClientEntity, CourtEntity])],
  controllers: [ReserveController],
  providers: [ReserveService ],
})
export class reserveModule {

}
