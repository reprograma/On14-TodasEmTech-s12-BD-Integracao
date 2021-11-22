const mongoose = require('mongoose');

const cantoresSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista : {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        required: true
    },

    deslikes: {
        type: Number,
        default: true
    },
    musicas: {
        type: Array,
        required: true
    },

})

module.exports = mongoose.model('cantores', cantoresSchema)