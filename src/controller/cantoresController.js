const CantoresSchema = require('../models/cantoresSchema');
const mongoose = require('mongoose')


const getAll = async (req, res) => {
    try {
        const cantores = await CantoresSchema.find()
        res.status(200).json(cantores)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


const createCantores = async (req, res) => {
    try { 
        const newCantores = new CantoresSchema({
           
            artista: req.body.artista,
            likes: req.body.likes,
            deslikes: req.body.deslikes,
            musicas: req.body.musicas,
            _id: new mongoose.Types.ObjectId()         
        })

        const savedCantores = await newCantores.save()
        res.status(200).json({
            message: "cantor adicionado com sucesso!",
            savedCantores
        })

    } catch(error) {
        res.status(500).json({
            mensage: error.message
        })
    }
}


const findCantoresById = async (req, res) => {
    try{
        const cantores = await CantoresSchema.findById(req.params.id)
      
        if(cantores) {
        res.status(200).json({
            message: "Cantor encontrado!", cantores
            })
        } else {
            res.status(404).json({
                message: "Cantor não encontrado!"
            })
        }
            } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}


module.exports = {

    getAll,
    findCantoresById,
    createCantores
        
}
