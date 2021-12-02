const mongoose = require('mongoose');//importando o mongoose 
// criando conexão entre o mongoose e o mongo
//sempre que se precisa de uma ação externa se usa função assíncrona

const MONGODB_URI = "mongodb+srv://apimusica:260101@cluster0.gjyq4.mongodb.net/Stream?retryWrites=true&w=majority"
//guardando a uri numa const pra chamar dps 
//dizendo pro js aguardar o mongoose fazer a conexão
//essa conexão recebe como parâmetro a uri do banco de dados e um obj que recebe duas propriedades
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

