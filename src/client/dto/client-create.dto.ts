import { IsString,IsEmail, Length, Matches, IsBoolean } from "class-validator";

export class clientCreateDTO{
    @IsString()
    @Length(2, 100) 
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(8, 100) 
    password: string;

    @IsString()
    @Length(8, 15) 
    phone: string;

    @IsBoolean()
    isVerified: boolean;

    @IsBoolean()
    isSocial: boolean;
}