const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  artista: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
  },
  dislikes: {
    type: Number
  },
  musicas: {
    type: Array
  }
})

module.exports = mongoose.model("music", musicSchema);