import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoDto } from './create-insumo.dto';

import { IsNotEmpty } from 'class-validator';

export class UpdateInsumoDto extends PartialType(CreateInsumoDto) {
    
    @IsNotEmpty()
    descripcion:string;
}
