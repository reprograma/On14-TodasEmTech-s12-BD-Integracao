const mongoose = require("mongoose");
const MusicSchema = require("../models/musicSchema");

const getAllMusics = async (req, res) => {
  try {
    const musics = await MusicSchema.find();
    res.status(200).json(musics);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMusicsById = async (req, res) => {
  try {
    const musicFound = await MusicSchema.findById(req.params.id);
    if (musicFound) {
      res.status(200).json(musicFound);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createMusics = async (req, res) => {
  try {
    const music = new MusicSchema({
      artists: req.body.artists,
      likes: req.body.likes,
      deslikes: req.body.deslikes,
      musics: req.body.musics,
      álbum: req.body.album,
      ano: req.body.year,
      _id: new mongoose.Types.ObjectId(),
    });

    const musicSaved = await music.save();
    res.status(201).json({
      musicas: musicSaved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllMusics,
  createMusics,
  getMusicsById,
};
