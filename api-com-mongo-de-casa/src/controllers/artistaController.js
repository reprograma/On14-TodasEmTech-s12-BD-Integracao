const ArtistaSchema = require("../models/artistaSchema");
const mongoose = require("mongoose");


const todosArtistas = async (request, response) => {
    try {
        const artistas = await ArtistaSchema.find();
        response.status(200).json(artistas)
              
    } catch (error) {
        response.status(500).json({message: error.message})                
    }
}

const artistaPorId = async (request, response) => {
    try {
        const artistaEncontrado = await ArtistaSchema.findById(request.params.id);
            response.status(200).json(
                    [
                        {
                            message: "Artista encontrado:",
                            artistaEncontrado
                        }
                    ]
                )    
    } catch (error) {
        response.status(500).json({message: error.message})        
    }
}

const criarArtista = async (request, response) => {
    try {
        const artista = new ArtistaSchema({
            nome: request.body.nome,
            album: request.body.album,
            musicas: request.body.musicas,
            _id: new mongoose.Types.ObjectId()
        })
    
        const artistaSalvo = await artista.save();
    
        response.status(201).json(
            [
                {
                    "mensagem" : "Artista criado com sucesso!",
                    artistaSalvo
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({messagem: error.message});        
    }   
}

const atualizarArtista = async (request, response) => {
    try {
        const artistaEncontrado = await ArtistaSchema.findById(request.params.id);

        if (artistaEncontrado) {

            artistaEncontrado.nome = request.body.nome || artistaEncontrado.nome;
            artistaEncontrado.album = request.body.album || artistaEncontrado.album;
            artistaEncontrado.musicas = request.body.musicas || artistaEncontrado.musicas;

        }

        const artistaSalvo = await artistaEncontrado.save();

        response.status(200).json(
            [
                {
                    message: "Artista atualizado com sucesso!",
                    artistaSalvo
                }
            ]
        )
        
    } catch (error) {
        response.status(500).json({messagem: error.message});        
    }
}

const deletarArtista = async (request, response) => {
    try {
        const artistaEncontrado = await ArtistaSchema.findById(request.params.id);

        if (artistaEncontrado) {
            artistaEncontrado.delete();
        }

        response.status(200).json(
            [
                {
                    message: "O artista a seguir foi deletado do sistema!",
                    artistaEncontrado
                }
            ]
        )
        
    } catch (error) {
        response.status(500).json({messagem: error.message});            
    }
}


module.exports = {
    todosArtistas,
    criarArtista,
    artistaPorId,
    atualizarArtista,
    deletarArtista  
}