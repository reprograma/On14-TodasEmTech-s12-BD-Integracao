const express = require("express");
const app = express();
const musica = require("./routes/musicaRoutes");

app.use(express.json());

app.use("/musicas", musica);

module.exports = app;
