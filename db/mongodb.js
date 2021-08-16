const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log(' bdd conectada'))



//Función que recibe un objeto con 3 propiedades
async function connectDb ({host, port, dbName}){
    // destructuracion

    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, {useNewUrlParser: true})
}
module.exports = connectDb