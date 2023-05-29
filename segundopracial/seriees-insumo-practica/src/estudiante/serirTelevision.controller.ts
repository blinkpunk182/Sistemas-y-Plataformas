import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieTelevision } from './entities/estudiante.entity';

@Controller('estudiante')
export class SerieController {
  constructor(private readonly estudianteService: SerieService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateSerieDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Get('/all')
  findAll() : SerieTelevision[] {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateSerieDto) {
    return this.estudianteService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
