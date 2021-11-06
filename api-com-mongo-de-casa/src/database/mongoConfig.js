const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://apimusica:190Thundra@cluster0.gv3lj.mongodb.net/artistas?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI,{
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