const mongoose = require("mongoose");

const musicaSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    titular: {
        type: String,
        required: true
    },
    
    numero: {
        type: String,
        required: true
    },

    validade: {
        type: Date,
        required: true
    },

    codigoSeguranca: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    }

})