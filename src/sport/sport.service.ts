import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSportDto } from './dto/sport-create.dto';
import { SportEntity } from './sport.entity';

@Injectable()
export class SportService {
    constructor(
         @InjectRepository(SportEntity)
         private sportRepository: Repository<SportEntity>,
    ) { }
   
    create(createSportDto: CreateSportDto) {
        const sport = this.sportRepository.create(createSportDto);
        return this.sportRepository.save(sport);
    }

    
}
