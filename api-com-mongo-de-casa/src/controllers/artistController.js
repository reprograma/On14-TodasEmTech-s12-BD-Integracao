const mongoose = require('mongoose');

const ArtistSchema = require('../models/artistSchema');

//[GET] "artistas/all" - retorna todos os autores de
const getAll = async (req, res) => {
    try {
        const artists = await ArtistSchema.find();
        res.status(200).json(artists);
        
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

//[GET] "artistas/{id}" - retorna um unico autor por id
const getById = async (req, res) => {
    try {
        const foundArtist = await ArtistSchema.findById(req.params.id);

        if(!foundArtist) {
            res.status(404).send({ message: error.message });
        } else {
            res.status(302).json(foundArtist);
        }
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

//[POST] "artistas/create" - cria um novo autor
const postArtist = async (req, res) => {
    //pegar a req do body
    try {
        
        const newArtist = new ArtistSchema({
            artist: req.body.artist,                
            album: req.body.album,
            _id: new mongoose.Types.ObjectId()
        });

        //salvar a req do body
        const savedArtist = await newArtist.save();

        //exibir objeto salvo
        res.status(201).json(savedArtist)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


module.exports = {
    getAll,
    postArtist,
    getById
}
