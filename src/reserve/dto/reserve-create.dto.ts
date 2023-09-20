import { IsDate, IsString } from "class-validator";


export class CreateReserveDto {

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsString()
    sportSelect: string;

    @IsString()
    client: string;

    @IsString()
    court: string;

}