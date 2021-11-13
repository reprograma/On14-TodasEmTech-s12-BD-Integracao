const mongoose = require("mongoose")

const artistaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required : true
    },
    album: {
        type: String
    },
    musica: [
        {
        type: String,
        required : true
    },
    ],
    data: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model("artista", artistaSchema)
