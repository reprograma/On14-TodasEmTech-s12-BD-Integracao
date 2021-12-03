const FilmeSchema = require('../models/filmeSchema')  // Filme em maísculo por ser uma classe
const mongoose = require('mongoose')

//Fazer GTE todas as musicas
const getAll = async (req, res) => {
    try {
        const filme = FilmeSchema.find()
        res.status(200).json(filme)

    } catch (error) {
        res.status(500).json({mensagem: error.message})
    }
}


// Faxer getById

const filmePorId = async (req, res) => {
    try {
      const filmeEncontrado = FilmeSchema.findById(req.params.id)
          if(filmeEncontrado){
              
            res.status(200).json(filmeEncontrado)}
    
    else{res.status(400).json(
        "message", " Insira um ID válido"
    )}
        } catch (error) {
        res.status(500).json({
            message: error.message
        })}
    }


//Criando banco de dados

const createFilme = async (req, res) => {
    try {
        const filme = new FilmeSchema({
            artista: req.body.artista,
            titulo: req.body.titulo,
            album: req.body.album,
            ano: req.body.ano,
            _id: new mongoose.Types.ObjectId()
        })

        const filmeSalvo = await filme.save()
        res.status(201).json({filme: filmeSalvo,})

    } catch(error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}



module.exports = {
    getAll,
    filmePorId,
    createFilme
    
}