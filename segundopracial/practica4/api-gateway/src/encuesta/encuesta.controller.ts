import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EncuestaMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { EncuestaDTO } from './dto/encuesta.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IEncuesta } from 'src/common/interfaces/encuesta.interface';


@ApiTags('encuestas')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/encuesta')
export class EncuestaController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyEncuesta = this.clientProxy.clientProxyEncuestas();

  @Post()
  create(@Body() encuestaDTO: EncuestaDTO): Observable<IEncuesta> {
    return this._clientProxyEncuesta.send(EncuestaMSG.CREATE, encuestaDTO);
  }

  @Get()
  findAll(): Observable<IEncuesta[]> {
    return this._clientProxyEncuesta.send(EncuestaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IEncuesta> {
    return this._clientProxyEncuesta.send(EncuestaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() encuestaDTO: EncuestaDTO): Observable<IEncuesta> {
    return this._clientProxyEncuesta.send(EncuestaMSG.UPDATE, { id, encuestaDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyEncuesta.send(EncuestaMSG.DELETE, id);
  }
}
