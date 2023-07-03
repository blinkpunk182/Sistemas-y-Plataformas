import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EncuestaService } from './encuesta.service';
import { EncuestaDTO } from './dto/encuesta.dto';
import { EncuestaMsg } from 'src/common/constants';

@Controller()
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @MessagePattern(EncuestaMsg.CREATE)
  create(@Payload() encuestaDTO: EncuestaDTO) {
    return this.encuestaService.create(encuestaDTO);
  }

  @MessagePattern(EncuestaMsg.FIND_ALL)
  findAll() {
    return this.encuestaService.findAll();
  }

  @MessagePattern(EncuestaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.encuestaService.findOne(id);
  }
  @MessagePattern(EncuestaMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.encuestaService.update(payload.id, payload.encuestaDTO);
  }

  @MessagePattern(EncuestaMsg.DELETE)
  delete(@Payload() id: string) {
    return this.encuestaService.delete(id);
  }
}
