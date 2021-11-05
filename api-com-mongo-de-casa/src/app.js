const express = require("express");
const cors = require("cors");
require("dotenv-safe").config();
const db = require("./database/mongoConfig");
const artistsRoutes = require("./routes/artistsRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/artistas", artistsRoutes);

db.connect();

module.exports = app;
