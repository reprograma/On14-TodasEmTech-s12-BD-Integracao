//4
const express = require('express')
//5
const cors = require('cors')

require('dotenv-safe').config()
//22
const db = require('./database/config')

const musicRoutes = require('./routes/routes')
//6
const app = express()
//7
app.use(cors())
app.use(express.json())

app.use('/music', musicRoutes)

db.connect()

//8
module.exports = app