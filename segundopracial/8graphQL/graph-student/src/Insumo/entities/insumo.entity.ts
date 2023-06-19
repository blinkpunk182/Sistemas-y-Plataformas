import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'insumo'})
@ObjectType()
export class Insumo {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    PreguntaEncuesta:string;

    @Column()
    @Field(()=>String)
    CampoAmplio:string;

    @Column()
    @Field(()=>String)
    TipoPregunta:string;

}
