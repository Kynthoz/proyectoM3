const Cancion = require('../models/Canciones')


async function addCanciones (req, res){

    try {
        const{
            nombCancion,
            nombArtista,
            nombDisco,
            nombGenero,
            descripcion
        }=req.body

        const canciones = Cancion ({
            nombCancion,
            nombArtista,
            nombDisco,
            nombGenero,
            descripcion
        })

        const cancionesGuardadas = await canciones.save()

        res.status(201).send({ cancionesGuardadas})
    } catch (e) {
        res.status(500).send({ message: e.message})
    }
   
}

async function getCanciones (req, res){

    const cancioneS = await Cancion.find().lean().exec()
// find consulta mongodb
// lean que lo que me devuelva la consulta se haga objetos js
// exec que ya me ejecuto la consulta y retorna la promesa que se resuelve con el await

    res.status(200).send({ cancioneS }) 


}





module.exports = {
    addCanciones,
    getCanciones
}