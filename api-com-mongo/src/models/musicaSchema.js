const mongoose = require('mongoose');

const musicaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista: {
        type: String, //colocando unique, esse objeto torna-se único
        required: true
    },

    album: {
        type: String
    },

    ano: {
        type: Number
    },

    titulo: {
        type: String,
        required: true
    },

    criadoEm: {
        type: Date,
        default: new Date() //new date pega a data atual
    },

}) 
//musica - -> schema/model
//musica[s] -> collection
//exportando para o banco - o mongoose cria a collection
module.exports = mongoose.model("musica", musicaSchema)