import { Module } from '@nestjs/common';
import { InsumooService } from './insumoo.service';
import { InsumooController } from './insumoo.controller';
import { Insumoo } from './entities/insumoo.entity';

@Module({
  controllers: [InsumooController],
  providers: [InsumooService],
  imports: [Insumoo],
  exports: [InsumooService, Insumoo],
})
export class InsumooModule {}
