



const express = require('express')
const cors = require('cors')
const db = require('./database/mongoConfig')
const musicaRoutes = require('./routes/artistaRoutes')

const app = express()


app.use(cors())
app.use(express.json())
app.use("all/", getAll)
app.use("criar/", createArtist)
app.use("/", artistByName)
app.use("update/", updateArtistById)
app.use("id:/", getById)
app.use("delete/", deleteArtistById)




db.connect()

module.exports = app