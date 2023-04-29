var axios = require("axios").default;
const url = "http://api:5000/v1/api/bebida";



async function getBebida(req, res, next) {
    const bebida = await axios.get(url); 
    res.render('bebida',  { title: 'Bebida', bebida: bebida.data });
}

async function postBebida(req, res, next) {
    const { orden, nombre, precio, cantidad } = req.body;
    await axios.post(url, { orden, nombre, precio, cantidad });
    res.redirect('bebida');
}


module.exports = {
    getBebida,
    postBebida
}