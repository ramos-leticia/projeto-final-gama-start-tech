const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_ACCESS, () => console.info("BD conectado com sucesso"));

const port = 4000;

app.use(express.json());
app.use('/jobsNet-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use('/app', routesUrls);
app.listen(port, () => console.info(`Servidor rodando em localhost:${port}`));