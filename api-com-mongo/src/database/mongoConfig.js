const mongoose = require("mongoose");

const MONGODB_URI = ""

const connect = async () =>{
    try {
        await mongoose.connect(MONGODB_URI, {
            userNewUrlParser: true,
            userUnifiedTopology: true
        })
        console.log("Banco conectado!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}