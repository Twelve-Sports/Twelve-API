
import { Controller,Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "./client.entity";
import { Repository } from "typeorm";


@Controller('client')
export class ClientController {
    constructor(@InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
    ) { }

    @Get()
    async getAll(): Promise<ClientEntity[]> {
        return await this.clientRepository.find();
    }
    
    }