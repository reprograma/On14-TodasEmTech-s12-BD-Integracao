const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  artista: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
  },
  deslikes: {
    type: Number
  },
  musicas: {
    type: Array
  }
}, { versionKey: false })

module.exports = mongoose.model("music", musicSchema);