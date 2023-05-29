import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serirTelevision.controller';



@Module({
  controllers: [SerieController],
  providers: [SerieService]
})
export class SerieModule {}
