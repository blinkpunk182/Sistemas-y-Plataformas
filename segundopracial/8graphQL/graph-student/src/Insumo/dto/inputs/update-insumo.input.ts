import { IsUUID } from 'class-validator';
import { CreateInsumoInput } from './create-insumo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateInsumoInput extends PartialType(CreateInsumoInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
