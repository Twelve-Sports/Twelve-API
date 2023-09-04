import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReserveEntity } from './reserve.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReserveEntity])],
  controllers: [],
})
export class reserveModule {}
