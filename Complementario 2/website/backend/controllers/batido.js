var axios = require("axios").default;
const url = "http://batidos:3131/v1/api/batido";



async function getBatido(req, res, next) {
    const batido = await axios.get(url); 
    res.render('batido',  { title: 'Batido', batido: batido.data });
}

async function postBatido(req, res, next) {
    const { orden, nombre, precio, descripcion } = req.body;
    await axios.post(url, { orden, nombre, precio, descripcion });
    res.redirect('batido');
}


module.exports = {
    getBatido,
    postBatido
}