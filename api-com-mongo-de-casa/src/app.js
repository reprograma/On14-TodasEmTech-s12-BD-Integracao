const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json()) //isso é para parsear

module.exports = app