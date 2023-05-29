import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './estudiante/serie.module';
import { InsumoModule } from './insumo/insumo.module';

@Module({
  imports: [SerieModule, InsumoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
