const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig') //conect ao BD

const cantorRouter = require('./router/cantorRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/cantor", cantorRouter)


db.connect() //conectando ao BD

module.exports = app