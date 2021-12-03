const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const filmeRouter = require('./router/filmeRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/filme", filmeRouter)

db.connect() 

module.exports = app