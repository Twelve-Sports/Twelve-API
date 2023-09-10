import { Injectable } from '@nestjs/common';
import { CourtEntity } from './court.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourtService {
  constructor(
    @InjectRepository(CourtEntity)
    private courtEntity: Repository<CourtEntity>,
  ) {}

  async findAll() {
    return await this.courtEntity.find();
  }
}
