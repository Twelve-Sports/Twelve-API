import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportEntity } from './sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SportEntity])],
  controllers: [],
})
export class sportModule {}
