const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://ananda:jujubakk@cluster0.eby0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("banco conectado!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}