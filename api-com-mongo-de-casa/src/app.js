const express = require('express')
const cors = require('cors')
require('dotenv-safe').config()
const db = require('./database/mongoConfig') // importar data base
const artistaRoutes = require('./routes/artistaRoutes')



const app = express()

app.use(cors())
app.use(express.json()) //isso é para parsear
app.use("/artista", artistaRoutes) // rota raiz

db.connect() //connectar

module.exports = app