import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtEntity } from './court.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourtEntity])],
  controllers: [],
})
export class courtModule {}
