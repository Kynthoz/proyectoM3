const express = require('express')

const bodyParser = require('body-parser')


const cancionesRoutes = require('./routes/canciones')


const app = express()

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use('/v1', cancionesRoutes)


module.exports = app 

//configurar todo lo relacionado a express