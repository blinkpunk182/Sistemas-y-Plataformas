import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { Insumo } from './entities/insumo.entity';


@Injectable()
export class InsumoService {

  private data: Insumo[]=[
    {id:1 ,  description:'familiar' },
    {id:1 ,  description:'familiar' },
  ]
  create(createInsumoDto: CreateInsumoDto) {
    const item = new Insumo();
    item.id=  this.data.length;
    item.description = createInsumoDto.descripcion
    this.data.push(item);
    return item;
  }

  findAll(): Insumo[] {
    return this.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumo`;
  }

  update(id: number, updateInsumoDto: UpdateInsumoDto) {
    return `This action updates a #${id} insumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumo`;
  }
}
