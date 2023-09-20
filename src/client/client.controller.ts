
import { Body, Controller,Get, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "./client.entity";
import { Repository } from "typeorm";
import { ClientService } from "./client.service";
import { clientCreateDTO } from "./dto/client-create.dto";


@Controller('client')
export class ClientController {
    constructor(@InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
    private clientService: ClientService
    ) { }

    @Get()
    async getAll(): Promise<ClientEntity[]> {
        return await this.clientRepository.find();
    }
    
    @Post()
    async createClient(@Body() createClientDto: clientCreateDTO) {
      return await this.clientService.createClient(createClientDto);
    }
    
    }