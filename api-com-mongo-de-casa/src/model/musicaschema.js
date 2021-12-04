//para criar a mongoose 
const mongoose = require('mongoose')

// aqui ele esta criando uma estancia  assim recebe como parametro um objeto 
const musicaSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  artista: {
      type: String,
      required: true
  },

  album: {
      type: String
  },

  ano: {
      type: Number,
  },

  titulo: {
      type: String,
      required: true
  },

  criadoEm: {
      type: Date,
      default: new Date()
  },

})
// musica -> schema/model
// musica[s] -> collection/

module.exports = mongoose.model("musica", musicaSchema)