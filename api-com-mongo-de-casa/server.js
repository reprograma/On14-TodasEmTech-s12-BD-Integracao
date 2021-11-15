const app = require('./src/routes/app');
const PORT = 7000;


app.listen(PORT, () => console.log("Servidor rodando na porta "+PORT));