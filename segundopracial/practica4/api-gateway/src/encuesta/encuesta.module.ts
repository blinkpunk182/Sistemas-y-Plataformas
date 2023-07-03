import { Module } from '@nestjs/common';
import { EncuestaController } from './encuesta.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [EncuestaController],
})
export class EncuestaModule {}
