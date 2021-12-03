const mongoose = require("mongoose");

const CantoresSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  artista: {
    type: String,
    required: true
  },

  likes: {
    type: Number
  },

  deslike: {
    type: Number
  },

  musicas: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model("cantores", CantoresSchema)