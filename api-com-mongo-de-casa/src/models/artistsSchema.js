const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  artista: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  deslikes: {
    type: Number,
  },
  musicas: [
    {
      type: String,
      required: true,
    },
  ],
  album: {
    type: String,
  },
  ano: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("artist", artistsSchema);
