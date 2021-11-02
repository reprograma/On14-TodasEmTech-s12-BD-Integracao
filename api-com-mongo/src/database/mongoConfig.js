const mongoose = require('mongoose');
const MONGODB_URL = "mongodb+srv://dbLene:daniel01092019@cluster0.q4quc.mongodb.net/dbLene?retryWrites=true&w=majority"

const connect  = async ()=>{
    try {
        await mongoose.connect(MONGODB_URL,{
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