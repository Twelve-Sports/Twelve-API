import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtEntity } from './court.entity';
import { CourtController } from './court.controller';
import { CourtService } from './court.service';
import { SportModule } from 'src/sport/sport.module';
import { SportEntity } from 'src/sport/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourtEntity,SportEntity]),
SportModule],
  controllers: [CourtController],
  providers: [CourtService],
})
export class courtModule {}
