const  mongoose =  require('mongoose');


const dbConnection = async ()=>{

    try{
        await mongoose.connect( process.env.MONGODB_CNN);
        console.log('Conexión con base de datos establecida con éxito')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
    }

}
module.exports = {
    dbConnection
}