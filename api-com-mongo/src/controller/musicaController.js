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
      res.status(404).json({
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
      album: req.body.album,
      ano: req.body.ano,
      titulo: req.body.titulo,
      _id: new mongoose.Types.ObjectId(),
    });

    const salvarMusica = await musica.save();
    res.status(201).json({
      musicas: salvarMusica,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const atualizarMusicaPorId = async (req, res) => {
  try {
    const musicaAtualizada = await MusicaSchema.findById(req.params.id);
    if (musicaAtualizada) {
      musicaAtualizada.artista = req.body.artista || musicaAtualizada.artista;
      musicaAtualizada.album = req.body.album || musicaAtualizada.album;
      musicaAtualizada.ano = req.body.ano || musicaAtualizada.ano;
      musicaAtualizada.titulo = req.body.titulo || musicaAtualizada.titulo;
    }
    const salvarMusica = await musicaAtualizada.save();
    res.status(200).json({
      musica: salvarMusica,
    });
  } catch (error) {
    res.status(500).json({
      mensagem: error.message,
    });
  }
};

const removerMusica = async (req, res) => {
  try {
    const musicaEncontrada = await MusicaSchema.findById(req.params.id);
    if (musicaEncontrada) {
      musicaEncontrada.delete();
      res.status(200).json({
        message: "Música excluída com sucesso!",
      });
    } else {
      res.status(404).json({
        message:
          "Não foi possível encontrar este id. Por favor, informe um id válido!",
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

module.exports = {
  obterMusicas,
  musicaPorId,
  criarMusica,
  atualizarMusicaPorId,
  removerMusica,
};
