const mongoose = require('mongoose');

const musicaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista: {
        type: String,
        required: true
    },

    album: {
        type: String,
        required:true
    },

    ano: {
        type: Number,
        required: true
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


module.exports = mongoose.model("musica", musicaSchema)