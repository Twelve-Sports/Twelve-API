import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReserveEntity } from "./reserve.entity";
import { Repository } from "typeorm";
import { ClientEntity } from "src/client/client.entity";
import { CourtEntity } from "src/court/court.entity";
import { CreateReserveDto } from "./dto/reserve-create.dto";

@Injectable()
export class ReserveService {
    constructor(
        @InjectRepository(ReserveEntity)
        private reserveRepository: Repository<ReserveEntity>,
        @InjectRepository(ClientEntity)
        private clientRepository: Repository<ClientEntity>,
        @InjectRepository(CourtEntity)
        private courtRepository: Repository<CourtEntity>,

    ) {}


async createReserve(createReserveDto: CreateReserveDto) {
    const { startDate, endDate, sportSelect, clientId, courtId } = createReserveDto;

    const existingClient = await this.clientRepository.findOne({ where: { id: clientId } });
    const existingCourt = await this.courtRepository.findOne({ where: { id: courtId } });
    const existingSports = await this.courtRepository.findOne({ where: { id: sportSelect } });

    const reserve = this.reserveRepository.create({ startDate, endDate, sportSelect: existingSports, client: existingClient, court: existingCourt });

    return this.reserveRepository.save(reserve);
}

findAll() {
    return this.reserveRepository.find({ relations: ['client', 'court'] });


}
}