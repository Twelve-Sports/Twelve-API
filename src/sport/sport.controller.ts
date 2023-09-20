import { Controller,Get, Post,Body } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SportEntity } from "./sport.entity";
import { Repository } from "typeorm";
import { CreateSportDto } from "./dto/sport-create.dto";
import { SportService } from "./sport.service";


@Controller('sport')
export class SportController {
    constructor(@InjectRepository(
        SportEntity)
        private sportRepository: Repository<SportEntity>,
        private sportService: SportService,

    ) { }
    
    @Get()
    async getAll(): Promise<SportEntity[]> {
        return await this.sportRepository.find();
    }

    @Post()
    async create(@Body() CreateSportDto: CreateSportDto) {
        return await this.sportService.create(CreateSportDto);
 }
}
