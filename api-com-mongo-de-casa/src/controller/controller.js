// ### Sugestão de Rotas
// [GET]  "artistas/all"   - retorna todos os autores de <br>
// [GET] "artistas/{id}" - retorna um unico autor por id <br>
// [POST] "artistas/create" - cria um novo autor <br>

const MusicsSchema = require('../schema/schema')
const mongoose = require('mongoose')

// [GET]  "artistas/all"   - retorna todos os autores de <br>
const getAll = async (req, res) => {
    try {
        const artista = await MusicsSchema.find()
        res.status(200).json(artista)
    } catch (error) {
        res.status(500).json({
            messagem:error.message
        })
    }
}
// [GET] "artistas/{id}" - retorna um unico autor por id <br>
const artistaById = async (req, res) => {
    try {
        const artistaFound = await MusicsSchema.findById(req.params.id)
        res.status(200).json(artistaFound)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
// [POST] "artistas/create" - cria um novo autor <br>
const createArtista = async (req, res) => {
    try {
        const newArtista = new MusicsSchema({
            _id: new mongoose.Types.ObjectId(),
            artista: req.body.artista,
            likes: req.body.likes,
            deslikes: req.body.deslikes,
            musicas: req.body.musicas
        })
        //30
        const artistaSaved = await newArtista.save()
        res.status(200).json({
            message:"Artista adicionado com sucesso!",
            artistaSaved
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteArtista = async (req, res) => {
    try {
        const artistaFound = await MusicsSchema.findById(req.params.id)
        await artistaFound.delete()

        res.status(200).json({
            messagem: artistaFound.artista + ". Artista deletado com sucesso."
        })
    } catch (error) {
        res.status(400).json({
            messagem: error.message
        })
    }
}

module.exports = {
    getAll,
    artistaById,
    createArtista,
    deleteArtista
}