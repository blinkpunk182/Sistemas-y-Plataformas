var axios = require("axios").default;
const url = "http://api:5000/v1/api/salchipapa";

async function getSalchipapa(req, res, next) {
    const salchipapa = await axios.get(url); 
    res.render('salchipapa',  { title: 'Salchipapas', salchipapa: salchipapa.data });
};

async function postSalchipapa(req, res, next) {
    const { orden, nombre, precio, descripcion } = req.body;
    await axios.post(url, { orden, nombre, precio, descripcion });
    res.redirect('salchipapa');
};


module.exports = {
    getSalchipapa,
    postSalchipapa
};