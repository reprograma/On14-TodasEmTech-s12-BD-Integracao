const artistaSchema = require("../models/artistaSchema")
const mongoose = require("mongoose")

const getAll = async (request, response) => {
    try {
        const artistas = await artistaSchema.find()
        response.status(200).json(artistas)
    } catch (error) {
        response.status(500).json({
            mensagem: error.message
        })
    }
}

const createArtist = async(request, response) => {
    try {
        const artista = new artistaSchema ({
            artista: request.body.artista,
            likes: request.body.likes,
            deslikes: request.body.deslikes,
            musicas: request.body.musicas,
            _id: new mongoose.Types.ObjectId() 
        })

        const artistaSalvo = await artista.save()
        response.status(201).json({
            artista: artistaSalvo
        })

    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const artistaByName = async (request, response) => {
    try {
        const artistaEncontrado = await artistaSchema.find({artista: new RegExp (request.query.artista, "i")})
        response.status(200).json(artistaEncontrado)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const updateArtistById = async (request, response) => {
    try {
        const artistaEncontrado = await artistaSchema.findById(request.params.id)
        if(artistaEncontrado){
            artistaEncontrado.artista = request.body.artista || artistaEncontrado.artista
            artistaEncontrado.likes = request.body.likes || artistaEncontrado.likes
            artistaEncontrado.deslikes = request.body.deslikes || artistaEncontrado.deslikes
            artistaEncontrado.musicas = request.body.musicas || artistaEncontrado.musicas

            const artistSave = await artistaEncontrado.save()
            response.status(200).json({
                artista: artistSave
            })
        }

        response.status(400).json({
            mensagem: "Artista não encontrado!"
        })
    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const getById = async (request, response) => {
    try {
        const artistaEncontrado = await artistaSchema.findById(request.params.id)
        response.status(200).json(artistaEncontrado)
    } catch (error) {
        response.status(500).json({
            mensagem: error.message
        })
    }
}

const deleteArtistById = async (request, response) => {
    try {
        const artistaEncontrado = await artistaSchema.findById(request.params.id)
        await artistaEncontrado.delete()

        response.status(200).json({
            mensagem: `Artista ${artistaEncontrado.artista} deletao com sucesso.`
        })
    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    getAll,
    createArtist,
    artistaByName,
    updateArtistById,
    getById,
    deleteArtistById
}