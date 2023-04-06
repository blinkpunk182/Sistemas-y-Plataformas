require('dotenv').config();
const express = require("express");
const cors = require('cors');

const { dbConnection } =  require('./database/config');

const db = async()=> {
        await dbConnection();

}
db();


const app = express();


const Encuesta = require('./models/Encuesta');


app.use(express.json());
app.use(cors());

app.get("/api/encuesta", async (req,res)=>{
    const encuesta = await Encuesta.find();
    return res.send(encuesta);
})

app.post("/api/encuesta", async (req,res)=>{
    const { descripcion  } =  req.body;
    
    const encuesta = new Encuesta({ descripcion })

    await encuesta.save()
  
    res.status(201).json(encuesta);
})

app.put("/api/encuesta/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const actualizadaEncuesta =  await Encuesta.findByIdAndUpdate(id,data )
    res.json(actualizadaEncuesta);
})

app.delete("/api/encuesta/:id", async (req,res)=>{
    const {id} = req.params;
    await Encuesta.findByIdAndDelete(id)
    res.json(`Se ha eliminado la encuesta`);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado`)
})


