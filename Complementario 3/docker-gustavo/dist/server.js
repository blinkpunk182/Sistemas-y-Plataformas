const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const usuariosRouter = require("./routes/usuarios");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/usuarios", usuariosRouter);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://facci:facci@cluster0.kidus.mongodb.net/crud", {
  useNewUrlParser: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexión exitosa a MongoDB Atlas");
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
}).catch(err => {
  console.error("Error al conectar a MongoDB Atlas: ", err);
});
module.exports = app;