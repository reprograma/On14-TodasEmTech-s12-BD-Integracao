const mongoose = require('mongoose')
require('dotenv-safe').config()

const MONGODB_URI = process.env.MONGODB_URI
//async espera retorno do BD
const connect = async () =>
{
  try {//criando a confi do BANCo
    await mongoose.connect(MONGODB_URI, /*colocando objeto*/{useNewUrlParser: true, useUnifiedTopology: true}) //aqui o js deve aguardar a conecção do mongo
    console.log("banco conectado!")
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = {connect}