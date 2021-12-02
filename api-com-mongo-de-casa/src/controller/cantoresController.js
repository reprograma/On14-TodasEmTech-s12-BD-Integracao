const CantoresSchema = require("../models/cantoresSchema");
const mongoose = require("mongoose");


const getAll = async (req, res) => {
  try {
    const cantores = await CantoresSchema.find();
    res.status(200).json(cantores);
  } catch (error) {
    res.status(500).json({
      messagem: error.message
    });
  }
}

const getById = async (req, res) => {
  try {
    const cantorEncontrado = await CantoresSchema.findById(req.params.id);
    if(cantorEncontrado) {
      res.status(200).json(cantorEncontrado);
    }
  } catch (error) {
    res.status(500).json({
      mensagem: error.message
    })
  }
}

const criarDb = async (req, res) => {
  try {
    const cantor = new CantoresSchema({
      artista: req.body.artista,
      like: req.body.like,
      deslike:req.body.deslike,
      musicas: req.body.musicas,
      _id: new mongoose.Types.ObjectId()
    })
  
    const salvarCantor = await cantor.save();
    res.status(201).json({
      cantor: salvarCantor
    })
  } catch (error) {
    res.status(500).json({
      mensagem: error.message 
    })
  }
}



module.exports = {
  getAll,
  getById,
  criarDb
}