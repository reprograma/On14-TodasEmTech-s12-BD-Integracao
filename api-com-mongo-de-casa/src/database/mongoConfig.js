const mongoose = require('mongoose');


const MONGODB_URI = "mongodb+srv://edilaine_dss:60391884@cluster0.n3obz.mongodb.net/test"



const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}