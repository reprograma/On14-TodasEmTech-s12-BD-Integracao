const MusicaSchema = require("../models/musicaSchema");
const mongoose = require("mongoose");

const obterMusicas = async (request, response) => {
    try {
        const musicas = await MusicaSchema.find();
        
        response.status(200).json(musicas);
    
    } catch (error) {
        
        response.status(500).json({
            mensagem: error.message
        });
    
    }
};

//Post
const createMusic = async (request, response) => {
    try {
        const musica = new MusicaSchema({
            artista: request.body.artista,
            titulo: request.body.titulo,
            album: request.body.album,
            ano: request.body.ano,
            _id: new mongoose.Types.ObjectId()
        });
        
    } catch (error) {
        response.status(500).json({
            mensagem: error.message
        });
    }

    const musicaSalva = await musica.save()

    response.status(201).json({
        musica: musicaSalva
    })
};

const updateMusicById = async (request, response) =>{
    try {
        const musicaEncontrada = await MusicaSchema.findById(request.params.id)
        //const musicaAtualizafa = await MusicaSchema.findByIdAndUpdate(request.params.id, request.body)
        
        if (musicaEncontrada) {

            musicaEncontrada.artista = request.body.artista || musicaEncontrada.artista
            
            musicaEncontrada.album = request.body.album || musicaEncontrada.album
            
            musicaEncontrada.ano = request.body.ano || musicaEncontrada.ano

            musicaEncontrada.titulo = request.body.titulo || musicaEncontrada.titulo

            const musicaSalva = await musicaEncontrada.save()

            response.status(200).json({
                musica: musicaSalva
            })
        }

        response.status(400).json({
            mensagem: "Desculpa, mas nao conseguimos encontrar essa música."
        })

    } catch (error) {
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const musicaPorNome = async (req, res) => {
    try {
        const musicaEncontrada = await MusicaSchema.find({titulo: req.query.titulo})
        res.status(200).json(musicaEncontrada)
    } catch (error) {
        res.status(500).json({

        })
    }
}

module.exports = {
    obterMusicas,
    createMusic,
    updateMusicById,
    musicaPorNome
};

//map regex, dentro do find