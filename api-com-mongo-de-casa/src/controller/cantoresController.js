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
    const cantoresEncontrado = await CantoresSchema.findById(req.params.id);
    if(cantoresEncontrado) {
      res.status(200).json(cantoresEncontrado);
    }
  } catch (error) {
    res.status(500).json({
      mensagem: error.message
    })
  }
}

const create = async (req, res) => {
  try {
    const cantores = new CantoresSchema({
      artista: req.body.artista,
      like: req.body.like,
      deslike:req.body.deslike,
      musicas: req.body.musicas,
      _id: new mongoose.Types.ObjectId()
    })
  
    const salvarCantores = await cantores.save();
    res.status(201).json({
      cantor: salvarCantores
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
  create
}