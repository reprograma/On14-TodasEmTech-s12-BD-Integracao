// requerindo o app
const app = require('./src/app')
// atribuindo a porta de app para abertura do servidor 
const PORT = 4040

app.listen(PORT, () => console.log("ReprogramaMusic Rodando na porta" +PORT))