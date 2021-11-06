const ArtistaSchema = require('../models/artistaSchema') //const tem que escrever sem com maiuscula pq é uma classe
const mongoose = require('mongoose')

//GET all

const getAll = async (req, res) => {
    try {
        const artistas = await ArtistaSchema.find()
        res.status(200).json(artistas)
    } catch (error) {
        res.status(500).json({
            mensagem : error.message
        })
    }
}

//POST
const createArtist = async (req, res) => {

}



module.exports = {
    getAll
}

/**### Sugestão de Rotas
[GET]  "artistas/all"   - retorna todos os autores de <br>
[GET] "artistas/{id}" - retorna um unico autor por id <br>
[POST] "artistas/create" - cria um novo autor <br>
 */
