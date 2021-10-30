const MusicaSchema = require("../models/musicaSchema");
const mongoose = require("mongoose");

const obterMusicas = async (req, res) => {
  try {
    const musicas = await MusicaSchema.find();
    res.status(200).json(musicas);
  } catch (error) {
    res.status(500).json([
      {
        mensagem: error.message,
      },
    ]);
  }
};

const musicaPorId = async (req, res) => {
  try {
    const musicaEncontrada = await MusicaSchema.findById(req.params.id);
    if (musicaEncontrada) {
      res.status(200).json(musicaEncontrada);
    } else {
      res.status(400).json({
        message: "Não foi possível encontrar este id.",
      });
    }
  } catch (error) {
    res.status(500).json([
      {
        mensagem: error.message,
      },
    ]);
  }
};

const criarMusica = async (req, res) => {
  try {
    const musica = new MusicaSchema({
      artista: req.body.artista,
      titulo: req.body.titulo,
      album: req.body.album,
      ano: req.body.ano,
      _id: new mongoose.Types.ObjectId(),
    });

    const musicaSalva = await musica.save();
    res.status(201).json({
      musica: musicaSalva,
    });
  } catch (error) {
    res.status(500).json({
      mensagem: error.message,
    });
  }
};

module.exports = {
  obterMusicas,
  musicaPorId,
  criarMusica,
};
