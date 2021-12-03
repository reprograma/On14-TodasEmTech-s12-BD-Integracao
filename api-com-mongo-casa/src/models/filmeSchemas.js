const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista: {
        type: String,
        required: true
    },

    album: {
        type: String
    },

    ano: {
        type: Number,
    },

    titulo: {
        type: String,
        required: true
    },

    criadoEm: {
        type: Date,
        default: new Date()
    },

})


module.exports = mongoose.model("filme", filmeSchema)  // o nome da model vira o nome da Colletion

