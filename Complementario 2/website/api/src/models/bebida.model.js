const mongoose = require('mongoose');
const { Schema } = mongoose;

const BebidasSchema = new Schema({
    orden: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: String, required: true }, 
    cantidad: { type: String, required: true }
});

module.exports = mongoose.model("bebidas", BebidasSchema);