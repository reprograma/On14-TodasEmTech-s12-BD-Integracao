const mongoose = require('mongoose')

const MONGODB_URI ="mongodb+srv://apimusica:<170412eS@cluster0.qobqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = async() => {
  //tr 
  try {
    await mongoose.connect(MONGODB_URI,{
      useNewUrlParser: true,
      userUnifiedTopology: true
    })
    console.log('Banco conectado!')
  } catch (error) {
    console.log(error.message)
    
  }
}

module.exports ={
  connect
}