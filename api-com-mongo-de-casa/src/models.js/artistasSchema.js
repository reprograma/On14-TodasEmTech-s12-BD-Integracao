const mongoose = require("mongoose");
const artistasSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    generoMusical: {
        type: String,

    },
    nasceuNoAno: {
        type: Number,

    },
    naturalDe:{
    type: String
},

    criadoEm: {
        type: Date,
        default : new Date()
    },
    id:mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("artista", artistasSchema)