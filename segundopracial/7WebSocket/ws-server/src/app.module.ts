import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';
import { InsumooModule } from './insumoo/insumoo.module';
import { SerieModule } from './serie/serie.module';

@Module({
  imports: [
  MensajesWsModule,
  InsumooModule,
  SerieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
