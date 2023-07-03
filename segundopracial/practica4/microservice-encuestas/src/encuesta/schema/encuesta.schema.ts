import * as mongoose from 'mongoose';

export const EncuestaSchema = new mongoose.Schema(
  {
    descripcion: { type: String, required: true },
    
  },
  { timestamps: true },
);

