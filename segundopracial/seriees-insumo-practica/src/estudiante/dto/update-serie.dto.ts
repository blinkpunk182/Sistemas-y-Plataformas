import { PartialType } from '@nestjs/mapped-types';
import { CreateSerieDto } from './create-serie.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateSerieDto extends PartialType(CreateSerieDto) {
    
    @IsNotEmpty()
    nombre:string;

    @IsNotEmpty()
    direccion:string;
}
