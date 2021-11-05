const express = require("express");
const cors = require("cors");
const musicRoute = require("./routes/musicRoutes");

require("dotenv-safe").config();

const db = require("./dataBase/mongoConfig");
const app = express();

app.use(cors());
app.use(express.json());
app.use("", musicRoute);

db.connect()

module.exports = app