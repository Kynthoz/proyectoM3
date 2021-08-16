const express = require ('express')

const upload = require('../libs/storage')

const { addCanciones, getCanciones } = require('../controllers/cancionesController')

const api = express.Router()


api.post('/canciones', upload.single('image'), addCanciones)

api.get('/canciones', getCanciones)


module.exports = api

