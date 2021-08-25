const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_ACCESS, () => console.info("BD conectado com sucesso"));

const port = 3000;

app.use('/app', routesUrls);
app.listen(port, () => console.info(`Servidor rodando em localhost:${port}`));