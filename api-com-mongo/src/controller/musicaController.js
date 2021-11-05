const MusicaSchema = require('../models/musicaSchema')
const mongoose = require('mongoose')

const getAll = async (req, res) => {
    try {
        const musicas = await MusicaSchema.find()
        res.status(200).json(musicas)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}

const musicaPorId = async (req, res) => {
    try {
      const musicaEncontrada = await MusicaSchema.findById(req.params.id)
          res.status(200).json(musicaEncontrada)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createMusic = async (req, res) => {
    try {
        const musica = new MusicaSchema({
            artista: req.body.artista,
            titulo: req.body.titulo,
            album: req.body.album,
            ano: req.body.ano,
            _id: new mongoose.Types.ObjectId()
        })

        const musicaSalva = await musica.save()
        res.status(201).json({
            musica: musicaSalva,
        })

    } catch(error) {
        res.status(400).json({
            mensagem: error.message,
        })
    }
}

const updateMusicById = async (req, res) => {
    try {
        const musicaEncontrada = await MusicaSchema.findById(re.params.id)

        if(musicaEncontrada){
            musicaEncontrada.artista = req.body.artista || musicaEncontrada.artista // ou ela vai ser o que seja informado, ou ira permanecer o que esta
            musicaEncontrada.album = req.body.album || musicaEncontrada.album
            musicaEncontrada.ano = req.body.ano || musicaEncontrada.ano
            musicaEncontrada.titulo = req.body.titulo || musicaEncontrada.titulo

            const musicaSalva = await musicaEncontrada.save()
            res.status(200).json({
                musica: musicaSalva
            })
        }
        
        res.status(400).json({
            mensagem: "Desculpa, mas nao conseguimos encontrar essa musica"
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    getAll,
    createMusic,
    musicaPorId,
    updateMusicById
}