const express = require("express");
const cors = require("cors");
const db = require("./database/mongoConfig");
const app = express();

db.connect()
app.use(cors());
app.use(express.json());

module.exports = app;
