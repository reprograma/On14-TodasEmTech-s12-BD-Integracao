const AlimentosSchema = require('../modules/alimentosSchema');
const mongoose = require('mongoose');


const getAll = async (req,res) => {
    try {
        const alimentos = await AlimentosSchema.find();
        res.status(200).send(alimentos)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getById = async (req,res) => {
    try {
        const alimentoById = await AlimentosSchema.findById(req.params.id)
        res.status(200).send(alimentoById)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const create = async (req,res) => {
    try {
        const alimento = new AlimentosSchema({ //*
            _id: new mongoose.Types.ObjectId(),
            nome:req.body.nome,
            season:req.body.season,
            categoria:req.body.categoria
        })

        await alimento.save()

        res.status(201).send(alimento)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deletar = async (req, res) => {
    try {
        const alimento = await AlimentosSchema.findById(req.params.id)
        alimento.delete()

        res.status(200).send(alimento)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getByNome = async (req, res) => {
    try {
        const alimento = await AlimentosSchema.find({nome: req.query.nome})
        res.status(200).send(alimento)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

const getBySeason = async (req, res) => {
    try {
        const alimento = await AlimentosSchema.find({season: req.query.season})
        res.status(200).send(alimento)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

const updateById = async (req, res) => {
        try {
            let alimento = await AlimentosSchema.findById(req.params.id)
            console.log(alimento)
        
            if(alimento){
                alimento.nome = req.body.nome || alimento.nome
                alimento.season = req.body.season || alimento.season
                alimento.categoria = req.body.categoria || alimento.categoria
            
            await alimento.save()
            res.status(200).send(alimento)
            }

            res.status(400).json({message:"Não foi possível localizar esse alimento."})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

module.exports = {
    getAll,
    getById,
    getByNome,
    getBySeason,
    create,
    deletar,
    updateById
}