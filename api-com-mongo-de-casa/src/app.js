const express = require("express");
const cors = require("cors");
require("dotenv-safe").config();
const db = require("./database/mongoConfig");
const cantores = require("./routes/cantoresRoutes");



const app = express();


app.use(cors());
app.use(express.json());
app.use("/artistas", cantores);



db.connect();



module.exports = app;