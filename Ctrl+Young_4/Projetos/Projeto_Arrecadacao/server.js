const express = require('express');

const connectDB = require('./config/config');

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT} beiiibe!`);
})