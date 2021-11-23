const express = require('express');
const cors = require('cors');
require('dotenv-safe').config();
const db = require('./database/mongoConfig');

const artistRoutes = require('./routes/artistRoutes');

const app = express();

app.use(cors());
app.use(express.json());

db.connect();

app.use('/artists', artistRoutes);


module.exports = app;
