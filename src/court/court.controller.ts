import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CourtService } from './court.service';
import { CreateCourtDto } from './dto/court-create.dto';

@Controller('court')
export class CourtController {
  constructor(private readonly courtService: CourtService) {}

  @Get()
  findAllCourt() {
    return this.courtService.findAll();
  }

  @Post()
  async createCourt(@Body() createCourtDto: CreateCourtDto) {
    const sportIds = createCourtDto.sportIds;
    return await this.courtService.createCourt(createCourtDto, sportIds);
  }

  @Get('sport/:id')
  findCourtBySportId(@Param('id') sportId: number) {
    return this.courtService.findCourtBySportId(sportId);
  }
}
  

