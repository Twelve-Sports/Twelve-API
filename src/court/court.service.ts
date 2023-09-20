import { Injectable, NotFoundException } from '@nestjs/common';
import { CourtEntity } from './court.entity';
import { In, Repository } from 'typeorm';
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


  async createCourt(createCourtDto: CreateCourtDto, sportIds: number[]) {
    const existingSports = await this.sportRepository.find({
      where: { id: In(sportIds) },
    });

    if (existingSports.length !== sportIds.length) {
      throw new NotFoundException('Alguns dos esportes não existem.');
    }

    const court = this.courtRepository.create(createCourtDto);
    court.sports = existingSports;

    console.log(court);

    return this.courtRepository.save(court);
  }

  async findAll() {
    return await this.courtRepository
      .createQueryBuilder('court')
      .leftJoinAndSelect('court.sports', 'sports')
      .getMany();
  }

  async findCourtBySportId(sportId: number) {
    const courts = await this.courtRepository
      .createQueryBuilder('court')
      .leftJoinAndSelect('court.sports', 'sports')
      .where('sports.id = :sportId', { sportId })
      .getMany();
  
    const courtsWithAllSports = await Promise.all(
      courts.map(async (court) => {
        const courtWithAllSports = await this.courtRepository
          .createQueryBuilder('c')
          .leftJoinAndSelect('c.sports', 's')
          .where('c.id = :courtId', { courtId: court.id })
          .getOne();
  
        return courtWithAllSports;
      }),
    );
  
    return courtsWithAllSports;
  }
}
