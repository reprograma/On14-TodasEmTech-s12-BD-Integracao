// requerindo o express
const express = require('express')
// requerindo  um cors d
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./dataBase/mongoConfig')

//re2querindo a rota de musica 
const musicaRoutes = require('./routes/musicaRouters')



// requerindo o app 
const app = express()
//chamando o  o cors
app.use(cors())
// usando o uso 
app.use(express.json())
// abrindo a lista de 
app.use("/musica" , musicaRoutes)

//conectar o banco  de ados 
db.connect()

//exportando 
module.exports = app





 