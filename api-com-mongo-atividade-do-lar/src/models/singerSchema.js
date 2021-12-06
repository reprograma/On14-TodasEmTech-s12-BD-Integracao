const mongoose = require('mongoose')

const singerSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    artista:{
        type:String,
        required:true
    },
    like:{
        type:Number
    },
    deliske:{
        type:Number
    },
    musicas:{
        type: Array,
       
    },
     createdIn:{
         type: Date,
         default: new Date()

     },

//Registro legal de criação

})

module.exports = mongoose.model("singer", singerSchema)