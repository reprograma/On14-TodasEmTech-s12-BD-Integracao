const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://Daniele:1234@cluster0.ox4y7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//const MONGODB_URI = process.env.MONGODB_URI



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