import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumooDto } from './create-insumoo.dto';

export class UpdateInsumooDto extends PartialType(CreateInsumooDto) {}
