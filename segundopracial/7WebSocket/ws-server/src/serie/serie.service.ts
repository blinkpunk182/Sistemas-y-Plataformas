import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';

@Injectable()
export class SerieService {

  private insumos: Serie[]=[
    {
      id:1,
      nombre:"flash",
      clasificacion: "nadita",
    },
    {
      id:2,
      nombre:"aro",
      clasificacion: "nadita",
    },
    {
      id:2,
      nombre:"picemaker",
      clasificacion: "nadita",
    },
  ]

  create(createSerieDto: CreateSerieDto) {
    return 'This action adds a new serie';
  }

  findOneByName(name: string){
    const insumo = this.insumos.find(item=>item.nombre===name)
    if(!insumo){
      throw new NotFoundException("nada de nada");
      
    }
    return insumo;
  }

  findAll() {
    return `This action returns all serie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serie`;
  }

  update(id: number, updateSerieDto: UpdateSerieDto) {
    return `This action updates a #${id} serie`;
  }

  remove(id: number) {
    return `This action removes a #${id} serie`;
  }
}
