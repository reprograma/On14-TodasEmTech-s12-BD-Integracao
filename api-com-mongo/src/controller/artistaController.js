const ArtistaSchema = require('../models/artistaSchema') 
const mongoose = require('mongoose')

//GET all

const getAll = async (req, res) => {
    try {
        const artistas = await ArtistaSchema.find()
        res.status(200).json(artistas)
    } catch (error) {
        res.status(500).json({
            mensagem : error.message
        })
    }
}

//POST
const createArtist = async (req, res) => {
    try {
        const artista = new ArtistaSchema ({
            artista: req.body.artista,
            likes: req.body.likes,
            deslikes: req.body.deslikes,
            musicas: req.body.musicas,
            _id: new mongoose.Types.ObjectId()
        })

        const artistaSalvo = await artista.save()
        res.status(201).json({
            artista: artistaSalvo
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

//GET por artista
const artistByName = async (req, res) => {
    try {
        const artistaEncontrado = await ArtistaSchema.find({artista: new RegExp (req.query.artista, "i")})
        res.status(200).json(artistaEncontrado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateArtistById = async (req, res) => {
    try {
        const artistaEncontrado = await ArtistaSchema.findById(req.params.id)

        if(artistaEncontrado){
            artistaEncontrado.artista = req.body.artista || artistaEncontrado.artista
            artistaEncontrado.likes = req.body.likes || artistaEncontrado.likes
            artistaEncontrado.deslikes = req.body.deslikes || artistaEncontrado.deslikes
            artistaEncontrado.musicas = req.body.musicas || artistaEncontrado.musicas

            const artistSave = await artistaEncontrado.save()
            res.status(200).json({
                artista: artistSave
            })
        }

        res.status(400).json({
            mensagem: "Desculpe, não conseguimos localizar este artista"
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}



//GET id
const getById = async (req, res) => {
    try {
        const artistaEncontrado = await ArtistaSchema.findById(req.params.id)
        res.status(200).json(artistaEncontrado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//DELETE port Id
const deleteArtistById = async (req, res) => {
    try {
        const artistaEncontrado = await ArtistaSchema.findById(req.params.id)
        
        await artistaEncontrado.delete()

        res.status(200).json({
            mensagem: `Artista ${artistaEncontrado.artista} deletado com sucesso.`
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    getAll,
    createArtist,
    artistByName,
    updateArtistById,
    getById,
    deleteArtistById
}