const artistasSchema = require("../models.js/artistasSchema");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
    const artistas = await artistasSchema.find();
    res.status(200).json(artistas);
  } catch (error) {
    res.status(500)({
      message: error.message,
    });
  }
};
const artistaId = async (req, res) => {
  try {
    const artistaEncontrado = artistasSchema.findById(req.params.id);
    if (artistaEncontrado) {
      res.status(200).json(artistaEncontrado);
    } else {
      res.status(400).json({
        message: "por favor, insira um id válido",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createArtista = async (req, res) => {
  try {
    const artista = new artistasSchema({
      nome: req.body.nome,
      generoMusical: req.body.generoMusical,
      nasceuNoAno: req.body.nasceuNoAno,
      naturalDe: req.body.naturalDe,
      criadoEm: req.body.criadoEm,
      _id: new mongoose.Types.ObjectId(),
    });
    const artistaSalvo = await artista.save();
    res.status(200).json({
      artista: artistaSalvo,
      message: "artista adicionado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      mensagem: "erro do servidor", //message,
    });
  }
};

module.exports = {
  getAll,
  createArtista,
  artistaId
};
