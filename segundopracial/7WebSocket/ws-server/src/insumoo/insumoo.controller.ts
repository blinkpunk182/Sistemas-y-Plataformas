import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsumooService } from './insumoo.service';
import { CreateInsumooDto } from './dto/create-insumoo.dto';
import { UpdateInsumooDto } from './dto/update-insumoo.dto';

@Controller('insumoo')
export class InsumooController {
  constructor(private readonly insumooService: InsumooService) {}

  @Post()
  create(@Body() createInsumooDto: CreateInsumooDto) {
    return this.insumooService.create(createInsumooDto);
  }

  @Get()
  findAll() {
    return this.insumooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insumooService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumooDto: UpdateInsumooDto) {
    return this.insumooService.update(+id, updateInsumooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumooService.remove(+id);
  }
}
