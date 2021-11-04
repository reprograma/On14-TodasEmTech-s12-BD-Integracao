const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  artists: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  deslikes: {
    type: Number,
  },
  musics: {
    type: Array,
    required: true,
  },
  album: {
    type: String,
  },
  year: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("music", musicSchema);
