const ArtistaSchema = require("../models/artistaSchema")
const mongoose = require("mongoose")


const getAll = async (request, response) => {
    try {
        const artistas = await ArtistaSchema.find()
        response.status(200).json(artistas)
              
    } catch (error) {
        response.status(500).json({message: error.message})                
    }
}

const getById = async (request, response) => {
    try {
        const idArtistaEncontrado = await ArtistaSchema.findById(request.params.id)
            response.status(200).json(
                    [
                        {
                            message: "Artista encontrado:",
                            idArtistaEncontrado
                        }
                    ]
                )    
    } catch (error) {
        response.status(500).json({message: error.message})        
    }
}

const createArtista = async (request, response) => {
    try {
        const artista = new ArtistaSchema({
            nome: request.body.nome,
            album: request.body.album,
            musica: request.body.musica,
            id: new mongoose.Types.ObjectId()
        })
    
        const artistaCriado = await artista.save()
    
        response.status(201).json(
            [
                {
                    "mensagem" : "O artista foi criado com sucesso!",
                    artistaCriado
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({messagem: error.message})      
    }   
}

const updateArtista = async (request, response) => {
    try {
        const idArtistaEncontrado = await ArtistaSchema.findById(request.params.id)

        if (idArtistaEncontrado) {

            idArtistaEncontrado.nome = request.body.nome || idArtistaEncontrado.nome
            idArtistaEncontrado.album = request.body.album || idArtistaEncontrado.album
            idArtistaEncontrado.musicas = request.body.musica || idArtistaEncontrado.musica

        }

        const artistaCriado = await idArtistaEncontrado.save()

        response.status(200).json(
            [
                {
                    message: "O artista foi atualizado com sucesso!",
                    artistaCriado
                }
            ]
        )
        
    } catch (error) {
        response.status(500).json({messagem: error.message})       
    }
}

const deleteArtista = async (request, response) => {
    try {
        const idArtistaEncontrado = await ArtistaSchema.findById(request.params.id)

        if (idArtistaEncontrado) {
            idArtistaEncontrado.delete()
        }

        response.status(200).json(
            [
                {
                    message: "O artista foi deletado com sucesso!",
                    idArtistaEncontrado
                }
            ]
        )
        
    } catch (error) {
        response.status(500).json({messagem: error.message})           
    }
}


module.exports = {
    getAll,
    createArtista,
    getById,
    updateArtista,
    deleteArtista  
}
