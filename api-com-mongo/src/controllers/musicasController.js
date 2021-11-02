const MusicaSchema = require('../models//musicaSchema')
const mongoose = require('mongoose')

const getAll = async(req, res)=>{
    try {

        constmusicas = await MusicaSchema.find()
        res.status(200).json(musicas)
        
    } catch (error) {
        res.status(500).json({
            messagem: error.message,
        })
        
    }
}
const creatMusic = async(req, res)=>{
try{
    
    const musica = new MusicaSchema({
        artista: req.body.artista,
        titulo: req.body.titulo,
        album: req.body.album,
        ano: req.body.ano,
        _id: new mongoose.Types.ObjectId()
    })
    const musicaSalva = await musica.save()
    res.status(2001).json({
        musica: musicaSalva
    })
}catch(error){
    res.status(500).json({
        mensagem: error.message
    })
}
}

/*const musicaId = async(req, res)=>{
    try{
        const musicaEncontrada = MusicaSchema.findById(req.params.id)
        res.status(200)
        }

    }catch(error){

    }*/




module.exports ={
    getAll
}