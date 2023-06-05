import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInsumooDto } from './dto/create-insumoo.dto';
import { UpdateInsumooDto } from './dto/update-insumoo.dto';
import { Insumoo } from './entities/insumoo.entity';

@Injectable()
export class InsumooService {
  private insumos: Insumoo[]=[
    {
      id:1,
      nombre:"Gustavo",
      descripcion: "nadita",
    },
    {
      id:2,
      nombre:"Arianna",
      descripcion: "nadita",
    },
    {
      id:2,
      nombre:"Rommeruto",
      descripcion: "nadita",
    },
  ]
  create(createInsumooDto: CreateInsumooDto) {
    return 'This action adds a new insumoo';
  }

  findAll() {
    return `This action returns all insumoo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumoo`;
  }

  update(id: number, updateInsumooDto: UpdateInsumooDto) {
    return `This action updates a #${id} insumoo`;
  }

  findOneByName(name: string){
    const insumo = this.insumos.find(item=>item.nombre===name)
    if(!insumo){
      throw new NotFoundException("nada de nada");
      
    }
    return insumo;
  }

  remove(id: number) {
    return `This action removes a #${id} insumoo`;
  }
}
