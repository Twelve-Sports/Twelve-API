import { Injectable } from '@nestjs/common';
import { CourtEntity } from './court.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourtDto } from './dto/court-create.dto';
import { SportEntity } from 'src/sport/sport.entity';

@Injectable()
export class CourtService {
  constructor(
    @InjectRepository(CourtEntity)
    private courtRepository: Repository<CourtEntity>,
    @InjectRepository(SportEntity)
    private sportRepository: Repository<SportEntity>,
  ) {}


  async create(createCourtDto: CreateCourtDto) {
    const court = this.courtRepository.create(createCourtDto);
    console.log(court);
    
    const sports = [];

    await Promise.all(
      createCourtDto.sportIds.map(async sport => {
        const sportEntity = await this.sportRepository.findOne({where: {id: sport}});
        sports.push(sportEntity);
      }),
    );
    court.sports = sports;
    console.log(sports);
    
    console.log(court);
    return this.courtRepository.save(court);


  }

  async findAll() {
    return await this.courtRepository.find();
  }
}
