import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInsumoInput, UpdateInsumoInput } from './dto/inputs';
import { Insumo } from './entities/insumo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotaService {

  constructor( 
    @InjectRepository(Insumo)
    private readonly notaRepository:Repository<Insumo> ){}

  async create(createInsumoInput: CreateInsumoInput): Promise<Insumo>  {
    const newNota= this.notaRepository.create(createInsumoInput);
    return await this.notaRepository.save(newNota); 
  }

  async findAll(): Promise<Insumo[]> {
    return this.notaRepository.find();
  }

  async findOne(id: string): Promise<Insumo> {
     const nota= await  this.notaRepository.findOneBy({id});
     if (!nota) throw new NotFoundException(`Not found`)
     return nota;
  }

  async update(id: string, updateNotaInput: UpdateInsumoInput): Promise<Insumo> {
    
    const nota = await this.notaRepository.preload(updateNotaInput);
    if (!nota) throw new NotFoundException(`Not found`)
    return this.notaRepository.save(nota);

  }

  async remove(id: string): Promise<Insumo> {

    const nota= await  this.findOne(id);

    await this.notaRepository.remove(nota);

    return {...nota, id};

  }
}
