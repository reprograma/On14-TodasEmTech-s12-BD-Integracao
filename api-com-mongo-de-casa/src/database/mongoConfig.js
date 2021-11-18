const mongoose = require("mongoose")

const MONGOB_URI = process.env.MONGOB_URI

const connect = async () => {
    try {
        await mongoose.connect(MONGOB_URI,{
            userNewParser: true,
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