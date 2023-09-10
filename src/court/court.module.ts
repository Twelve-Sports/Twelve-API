import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtEntity } from './court.entity';
import { CourtController } from './court.controller';
import { CourtService } from './court.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourtEntity])],
  controllers: [CourtController],
  providers: [CourtService],
})
export class courtModule {}
