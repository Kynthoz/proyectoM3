const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Tabla/Conexiones
const CancionesSchema = Schema({
    nombCancion:String,
    nombArtista:String,
    imgUrl:String,
    nombDisco:String,
    nombGenero:String,
    descripcion: String

}, {
    timestamps: true
})

module.exports = mongoose.model('Cancion', CancionesSchema)