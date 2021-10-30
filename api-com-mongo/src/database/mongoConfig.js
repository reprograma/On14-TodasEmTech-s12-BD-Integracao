
const mongoose = require("mongoose");

const MONGODB_URI = ""

const connect = async () =>{
    try {
        await mongoose.connect(MONGODB_URI, {
            userNewUrlParser: true,
            userUnifiedTopology: true
        })
        console.log("Banco conectado!")

const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://apimusica:11aa22aa33aa@cluster0.mt9gn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// alt+z
// <password> = 11aa22aa33aa

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