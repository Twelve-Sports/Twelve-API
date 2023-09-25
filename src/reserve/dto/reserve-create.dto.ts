import { IsDate, IsNumber, IsString } from "class-validator";


export class CreateReserveDto {

    @IsString()
    startDate: string;

    @IsString()
    endDate: string;

    @IsNumber()
    sportSelect: number;

    @IsNumber()
    clientId: number;

    @IsNumber()
    courtId: number;

}