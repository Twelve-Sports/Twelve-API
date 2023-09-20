import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportEntity } from './sport.entity';
import { SportController } from './sport.controller';
import { SportService } from './sport.service';

@Module({
  imports: [TypeOrmModule.forFeature([SportEntity])],
  controllers: [SportController],
  providers: [SportService],
  exports: [SportModule],
})
export class SportModule {}
