import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';

import { InsumoService } from './insumo.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { Insumo } from './entities/insumo.entity';



@Controller('insumo')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}

  @Post()
  create(@Body() createInsumoDto: CreateInsumoDto) {
    return this.insumoService.create(createInsumoDto);
  }

  @Get()
  findAll() :Insumo[] {
    return this.insumoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.insumoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumoDto: UpdateInsumoDto) {
    return this.insumoService.update(+id, updateInsumoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumoService.remove(+id);
  }
}
