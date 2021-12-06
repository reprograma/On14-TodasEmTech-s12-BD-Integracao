const singersSchema = require ('../models/singerSchema')
const mongoose = require ('mongoose')
const singerSchema = require('../models/singerSchema')

const getAll = async (req, res)  => {
    try{
        const singers = await singersSchema.find ()
        res.status(200).json(singers)

    } catch  (error){
        res.status(500).json({
            messagem: error.message,
        })
}                
}


const createSinger = async (req,res)=> {
    try{
    const singer = new singersSchema ({
        artista: req.body.artista,
        like: req.body.like,
        deslike: req.body.deslike,
        musicas: req.body.musicas,
        _id: new mongoose.Types.ObjectId()
    })

    const cantorSalvo = await singer.save()
    res.status(201).json({
        musica: cantorSalvo,
    })

} catch(error)  {
    res.status(500).json({
        messagem: error.message,
    })
   }
 }

 const singerForId = async (req,res) => {
    try {
      const singerFound = await singerSchema.findById(req.params.id)
          res.status(200).json(singerFound)
    } catch (error) {
        res.status(500).json({
            messagem: error.message
        })
    }
}

const singerByName = async (req, res) => {
    try {
        const singerFound = await singerSchema.find({ titulo: new RegExp(req.query.artista, "i") })
        res.status(200).json(singerFound)

    } catch (error) {
        res.status(500).json({
            messagem: error.message
        })
    }
}


const updateSingerById = async (req, res) => {
    try {
        const singerFound = await singerSchema.findById(req.params.id)

        if (singerFound) {
            //                  valor que quero mudar  ou  valor que já existe
            singerFound.artista = req.body.artista || singerFound.artista
            singerFound.likes = req.body.likes || singerFound.likes
            singerFound.deslikes = req.body.deslikes || singerFound.deslikes
            singerFound.musicas = req.body.musicas || singerFound.musicas

            const cantorSalvo = await singerFound.save()
            res.status(200).json({
                musica: musicaSalva
            })
        }

        res.status(400).json({
            mensagem: "Descupa, mas não conseguimos encontrar essa cantor"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

const deleteSingerById = async (req, res) => {
    try {
        const singerFound = await singerSchema.findById(req.params.id)

       await singerFound.delete()

       res.status(200).json({
           mensagem: `Cantor/Cantora '${singerFound.artista}' deletada com sucesso!`
       })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    getAll,
    createSinger,
    singerForId,
    singerByName,
    updateSingerById,
    deleteSingerById
    
}