const express = require('express')
const cors = require('cors')
require('dotenv-safe').config()

const db = require('./database/mongoConfig')

const artistaRoutes = require('./routes/artistaRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/artista", artistaRoutes)

db.connect() 

module.exports = app