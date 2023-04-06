const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EncuestaSchema = new Schema({
    descripcion: String
});

const EncuestaModel = mongoose.model('Encuesta', EncuestaSchema);

module.exports = EncuestaModel;