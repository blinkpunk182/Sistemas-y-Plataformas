const mongoose = require('mongoose');
const { Schema } = mongoose;

const HamburSchema = new Schema({
    orden: { type: String, required: true },
    nombre: { type: String, required: true }, 
    precio: { type: String, required: true },
    descripcion: { type: String },
});

module.exports = mongoose.model("hambur", HamburSchema);