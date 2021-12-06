const express = require('express')
const cors = require('cors')
const db = require('./database/mongoConfig')
const singerRoutes = require('./routes/singerRoutes')
const app = express()


app.use(cors())
app.use(express.json())
app.use("/cantor", singerRoutes)

db.connect() //conectando ao banco db

module.exports = app