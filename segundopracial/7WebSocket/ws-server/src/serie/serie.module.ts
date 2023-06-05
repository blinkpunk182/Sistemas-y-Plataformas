import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { Serie } from './entities/serie.entity';

@Module({
  controllers: [SerieController],
  providers: [SerieService],
  imports:[Serie],
  exports: [SerieService, Serie]
})
export class SerieModule {}
