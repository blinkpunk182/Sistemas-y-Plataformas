import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { InsumooModule } from '../insumoo/insumoo.module';
import { SerieModule } from 'src/serie/serie.module';
//  'src/estudiante/estudiante.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[InsumooModule, SerieModule]
})
export class MensajesWsModule {}
