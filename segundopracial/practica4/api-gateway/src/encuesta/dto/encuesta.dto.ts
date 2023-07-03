import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsString } from 'class-validator';

export class EncuestaDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    descripcion:string;

}
