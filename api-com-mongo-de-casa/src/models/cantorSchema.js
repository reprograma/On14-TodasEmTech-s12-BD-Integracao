const mongoose = require('mongoose'); //parte da conecção

// olhar ex abaixo: o new cria uma instancia - atribuir algo a classe vazia. Dentro das chaves fica o nosso objeto.
const cantorSchema = new mongoose.Schema({ //dentro ficam as propriedades.
id: mongoose.Schema.Types.ObjectId,
//id acima é padrão.
  artista: 
{
type: String,
required: true //define se a propriedade vai ser adquirida ou ñ.
},
album: 
{//esse n precisa ser requerido
  type: String
},
ano: 
{
  type: Number
},
titulo: 
{
type: String,
require: true
},
criadoEm://esse é para evitar fraude.
{
  type: Date,
  default: new Date()//valor padrão, onde o New Date pega a data atual.
},

}) 

module.exports = mongoose.model("cantor", cantorSchema) 