const express = require('express');
const cors = require('cors');

require('dotenv-safe').config()
const db = require('./database/config')

const routes = require('./routes/alimentosRoutes')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/alimentosSazonais', routes);

db.connect()

module.exports = app;