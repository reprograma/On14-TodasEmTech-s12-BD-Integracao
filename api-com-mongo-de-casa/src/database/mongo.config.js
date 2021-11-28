const MONGO_URI = "mongodb+srv://apiArtistas:andreareprograma@cluster0.erfnu.mongodb.net/apiArtistas?retryWrites=true&w=majority"
const mongoose = require("mongoose");
const artistasSchema = require("../models.js/artistasSchema");
const connect = async ()=>{
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            //useUndefinedTopology: true
                   })
        console.log("banco conectado");
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    connect,
    mongoose
}

