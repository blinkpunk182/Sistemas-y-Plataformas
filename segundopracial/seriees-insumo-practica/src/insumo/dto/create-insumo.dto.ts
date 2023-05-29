import { IsNotEmpty, IsString } from "class-validator";
export class CreateInsumoDto {
 

    @IsString()
    @IsNotEmpty()
    descripcion:string;
}
