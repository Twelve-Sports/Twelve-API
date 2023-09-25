import { Controller, Get, Post, Body } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReserveEntity } from "./reserve.entity";
import { Repository } from "typeorm";
import { ReserveService } from "./reserve.service";
import { CreateReserveDto } from "./dto/reserve-create.dto";


@Controller('reserve')
export class ReserveController {
 constructor(
    @InjectRepository(ReserveEntity)
    private reserveRepository: Repository<ReserveEntity>,
    private reserveService: ReserveService
 ) {}

 @Get()
    async findAll(): Promise<ReserveEntity[]> {
        return await this.reserveService.findAll();
    }

@Post()
    async createReserve(@Body() createReserveDto: CreateReserveDto) {
      return await this.reserveService.createReserve(createReserveDto);
    }
}