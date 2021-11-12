const cantorSchema = require('../models/cantorSchema')
const mongoose = require('mongoose')

const getAll = async(req, res)=>
{
  try {
    const cantor = cantor.find()
    res.status(200).json(cantor)
  } catch (error) {
    res.status(500).json({mensage: error.mensage})  //erro da API
  }
}

//criando o banco de dados:
const creatCantor = async(req, res)=>

{
  try {
    const cantor = new cantorSchema({
      artista: req.body.artista,
      titulo: req.body.titulo,
      album: req.body.album,
      ano: req.body.ano,
      _id: new mongoose.Types.ObjectId()
    })
    const cantorSalvo = await cantor.save()
    res.status(201).json({cantorSalvo,})
  } catch (error) {
    res.status(500).json({menssage: error.mensage,})
  }
}
//fazendo o getById:
const cantorPorId = async (req, res)=>
{
  try {
    const cantorEncontrado = cantorSchema.findById(req.params.id)
    if(cantorEncontrado){res.status(200).json(cantorEncontrado)}

    else {res.status(400).json({
      "mensage": "por favor, ensira um id valido"
    })}
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
  


module.exports = 
{
  getAll,
  creatCantor,
  cantorPorId
}