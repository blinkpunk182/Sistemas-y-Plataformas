import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaSchema } from './schema/encuesta.schema';
import { ENCUESTA } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { EncuestaController } from './encuesta.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ENCUESTA.name,
        useFactory: () => EncuestaSchema,
      },
    ]),
  ],
  controllers: [EncuestaController],
  providers: [EncuestaService]
})
export class EncuestaModule {}
