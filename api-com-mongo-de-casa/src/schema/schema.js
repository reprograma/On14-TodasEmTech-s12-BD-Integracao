//16
const mongoose = require('mongoose')
const musicSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    artista :{
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    deslikes: {
        type: Number,
        required: true
    },
    musicas: {
        type: [String],
        required: true
    },
    criadoEm:{
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model("musics", musicSchema)