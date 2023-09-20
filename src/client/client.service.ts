import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';
import { clientCreateDTO } from './dto/client-create.dto';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity)
        private clientRepository: Repository<ClientEntity>,
    ) { }

        createClient(createClientDto: clientCreateDTO) {
            const client = this.clientRepository.create(createClientDto);
            return this.clientRepository.save(client);
        }
    }
    