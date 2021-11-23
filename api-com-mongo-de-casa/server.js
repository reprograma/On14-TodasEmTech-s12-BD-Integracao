//1
const app = require('./src/app')
//2
const PORT = 3000
//3
app.listen(PORT, ()=>console.log("Servidor rodando na porta " + PORT))