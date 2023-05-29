import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieTelevision } from './entities/estudiante.entity';

@Injectable()
export class SerieService {

  private estudiantes: SerieTelevision[]=[
    {id:1 , nombreSerie:'Uno', clasificacion:'familiar' },
    {id:2 , nombreSerie:'Dos', clasificacion:'infantil' },
  ]

  create(createEstudianteDto: CreateSerieDto) {
    const serie = new SerieTelevision();
    serie.id=  Math.max( ... this.estudiantes.map(elemento => elemento.id),0 )+1 ;
    serie.nombreSerie= createEstudianteDto.nombre;
    serie.clasificacion= createEstudianteDto.direccion;
    this.estudiantes.push(serie);
    return serie;
  }

  findAll() : SerieTelevision[] {
    return this.estudiantes;
  }

  findOne(id: number) {
    const estudiante =  this.estudiantes.find(estudiante=> estudiante.id===id);
    if (!estudiante) throw new NotFoundException(`ID ${id} not found`)
    return estudiante;
  }

  update(id: number, updateEstudianteDto: UpdateSerieDto) {
    const { nombre, direccion, } = updateEstudianteDto;
    const estudiante = this.findOne(id);
    if (nombre) estudiante.nombreSerie= nombre;
    if (direccion) estudiante.clasificacion= direccion;

    this.estudiantes =  this.estudiantes.map( elemento=> {
      if (elemento.id===id) return estudiante;
      return elemento;
    } )

    return estudiante;

  }

  remove(id: number) {
    this.findOne(id);
    this.estudiantes =  this.estudiantes.filter(elemento=> elemento.id!== id);
  }
}
