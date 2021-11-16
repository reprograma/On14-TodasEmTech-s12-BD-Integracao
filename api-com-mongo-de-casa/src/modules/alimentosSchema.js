const mongoose = require('mongoose');

const alimentoSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    nome: {
        type : String,
        required : true,
    },
    season: {
        type:Array,
        required:true
    },
    categoria:{
        type: String,
        required:true
    },
    creationDate:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('alimentos',alimentoSchema)
