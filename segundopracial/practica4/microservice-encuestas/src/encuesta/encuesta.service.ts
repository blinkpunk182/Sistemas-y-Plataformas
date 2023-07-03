import { EncuestaDTO } from './dto/encuesta.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ENCUESTA } from 'src/common/models/models';
import { IEncuesta } from 'src/common/interfaces/encuesta.interface';

@Injectable()
export class EncuestaService {
  constructor(@InjectModel(ENCUESTA.name) private readonly model: Model<IEncuesta>) {}

  
  async create(encuestaDTO: EncuestaDTO): Promise<IEncuesta> {
    const newEncuesta = new this.model(encuestaDTO);
    return await newEncuesta.save();
  }

  async findAll(): Promise<IEncuesta[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IEncuesta> {
    return await this.model.findById(id);
  }

  async update(id: string, encuestaDTO: EncuestaDTO): Promise<IEncuesta> {
    return await this.model.findByIdAndUpdate(id, encuestaDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
