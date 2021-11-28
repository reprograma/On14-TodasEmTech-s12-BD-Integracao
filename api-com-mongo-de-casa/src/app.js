const express = require("express");
const cors = require("cors");
require('dotenv-safe').config()
const app = express();
const db = require("./database/mongo.config");
const artistaRoutes = require("../src/routes/artistasRoutes");

app.use(cors());
app.use(express.json());
app.use("/artista", artistaRoutes);

db.connect();
module.exports = app;
