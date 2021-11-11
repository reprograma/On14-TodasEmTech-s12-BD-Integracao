const MusicSchema = require("../models/musicSchema");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
    const allMusic = await MusicSchema.find();
    res.status(200).send(allMusic)
  } catch (error) {
    res.sendStatus(500)
  }
}

const getById = async (req, res) => {
  try {
    const musicRequest = await MusicSchema.findById(req.params.id)
    res.status(200).send(musicRequest)
  } catch (error) {
    res.sendStatus(500)
  }
}

const createArtist = async (req, res) => {
  try {
    const newArtist = new MusicSchema({
      artista: req.body.artista,
      likes: req.body.likes,
      deslikes: req.body.deslikes,
      musicas: req.body.musicas
    })

    const artistSaved = await newArtist.save()
    res.status(201).send(artistSaved)
  } catch (error) {
    res.status(500).json({
      mensagem: error.message
    })
    
  }
}


module.exports = {
  getAll,
  getById,
  createArtist
}