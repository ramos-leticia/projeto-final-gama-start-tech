const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => console.info(`Servidor rodando em localhost:${port}`));