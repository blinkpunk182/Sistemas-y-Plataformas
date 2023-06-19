import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateInsumoInput {

  @Field(()=>String )
  @IsNotEmpty()
  PreguntaEncuesta:string;

  @Field(()=>String )
  @IsNotEmpty()
  CampoAmplio:string;

  @Field(()=>String )
  @IsNotEmpty()
  TipoPregunta:string;

}
