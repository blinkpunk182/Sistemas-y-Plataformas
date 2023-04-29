var axios = require("axios").default;
const url = "http://api:5000/v1/api/hambur/";

async function getHambur(req, res, next) {
    const hambur = await axios.get(url); 
    res.render('hambur',  { title: 'Hambur', hambur: hambur.data });
}

async function postHambur(req, res, next) {
    const { orden, nombre, precio, descripcion } = req.body;
    await axios.post(url, { orden, nombre, precio, descripcion });
    res.redirect('hambur');
}



module.exports = {
    getHambur,
    postHambur
   
}