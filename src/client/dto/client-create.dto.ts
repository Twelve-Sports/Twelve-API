import { IsString,IsEmail } from "class-validator";

export class clientCreateDTO{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    phone: string;
}