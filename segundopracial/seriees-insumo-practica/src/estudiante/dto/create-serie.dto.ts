import { IsNotEmpty, IsString } from "class-validator";

export class CreateSerieDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    direccion:string;
}
