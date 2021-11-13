const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

<<<<<<< HEAD
const musicaRoutes = require('./routes/musicaRoutes')
=======
>>>>>>> f9aaf0d46d94497468c5459521a7e22c8331065b

const app = express()



const app = express()


app.use(cors())
app.use(express.json())
app.use("/musica", musicaRoutes)

db.connect() 

module.exports = app

module.exports = app

