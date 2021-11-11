const mongoose = require("mongoose");

const artistaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required : true
    },
    album: {
        type: String
    },
    musicas: [
        {
        type: String,
        required : true
    },
    ],
    dataCriacao: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model("artista", artistaSchema);