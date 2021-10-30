const mongoose = require('mongoose');

const musicaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista:{
        type: String,
        required: true,
    },
    album:{
        type: String,
    },
    ano: {
        type: Number,
    },
    titulo:{
        type: String,
        required:true
    },
    criadoEm:{
        type: Date,
        default: newDate()
    }
})

module.exports = mongoose.model("musica", musicaSchema)