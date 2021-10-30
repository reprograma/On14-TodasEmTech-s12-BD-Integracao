const express = require("express");
const cors = require("cors");
require("dotenv-safe").config()
const db = require("./database/mongoConfig");
const musicasRoutes = require("./routes/musicaRoutes")
const app = express();

db.connect()
app.use(cors());
app.use(express.json());
app.use("/musica", musicasRoutes)
module.exports = app;
