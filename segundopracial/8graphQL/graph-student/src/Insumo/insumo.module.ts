import { Module } from '@nestjs/common';
import { NotaService } from './insumo.service';
import { NotaResolver } from './insumo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Insumo } from './entities/insumo.entity';


@Module({
  providers: [NotaResolver, NotaService],
  imports:[
    TypeOrmModule.forFeature([Insumo])
  ]
})
export class NotaModule {}
