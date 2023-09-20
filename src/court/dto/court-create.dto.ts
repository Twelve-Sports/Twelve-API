import { IsString,IsNumber} from "class-validator";


export class CreateCourtDto {
    @IsString()
    name: string;

    @IsNumber({},{each:true})
    sportIds: number[];
}