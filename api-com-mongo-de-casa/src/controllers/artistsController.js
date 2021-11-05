const ArtistsSchema = require("../models/artistsSchema");
const mongoose = require("mongoose");

const getAllArtists = async (req, res) => {
  try {
    const artists = await ArtistsSchema.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getArtistsById = async (req, res) => {
  try {
    const artistFound = await ArtistsSchema.findById(req.params.id);
    if (artistFound) {
      res.status(200).json(artistFound);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createArtists = async (req, res) => {
  try {
    const artist = new ArtistsSchema({
      _id: new mongoose.Types.ObjectId(),

      artista: req.body.artista,
      likes: req.body.likes,
      deslikes: req.body.deslikes,
      musicas: req.body.musicas,
      album: req.body.album,
      ano: req.body.ano,
    });
    const artistSaved = await artist.save();
    res.status(201).json({
      massage: `Artista: ${artist.artista}, criade com sucesse!`,
      artistSaved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateArtists = async (req, res) => {
  try {
    const artistFound = await ArtistsSchema.findById(req.params.id);

    if (artistFound) {
      artistFound.artista = req.body.artista || artistFound.artista;
      artistFound.feat = req.body.feat || artistFound.feat;
      artistFound.likes = req.body.likes || artistFound.likes;
      artistFound.deslikes = req.body.deslikes || artistFound.deslikes;
      artistFound.musicas = req.body.musicas || artistFound.musicas;
      artistFound.album = req.body.album || artistFound.album;
      artistFound.ano = req.body.ano || artistFound.ano;
    }
    const artistSaved = await artistFound.save();
    res.status(200).json({
      message: `Artista: ${artistFound.artista}, atualizade com sucesse!`,
      artistSaved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteArtists = async (req, res) => {
  try {
    const artistFound = await ArtistsSchema.findById(req.params.id);

    if (artistFound) {
      artistFound.delete();
      res.status(200).json({
        message: `Artista: ${artistFound.artista}, excluíde com sucesse!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllArtists,
  createArtists,
  getArtistsById,
  updateArtists,
  deleteArtists,
};
