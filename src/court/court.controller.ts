import { Controller, Get, Post, Body } from '@nestjs/common';
import { CourtService } from './court.service';
import { CreateCourtDto } from './dto/court-create.dto';

@Controller('court')
export class CourtController {
  constructor(private readonly courtService: CourtService
    ) {}

  @Get()
  findAllCourt() {
    return this.courtService.findAll();
  }

  @Post()
  async create(@Body() createCourtDto: CreateCourtDto) {
    return await this.courtService.create(createCourtDto);
  }

  
  }

