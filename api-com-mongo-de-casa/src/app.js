const express = require("express");
const cors = require("cors");
require("dotenv-safe").config();
const db = require("./database/mongoConfig");
const musicRoutes = require("./routes/musicRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/artists", musicRoutes);

db.connect();

module.exports = app;
