//importando o express
const express = require('express');
const path = require('path');

//criando o app
const app = express();
const PORT = 3000;

//dizendo pro express que a pasta "public" contém arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//rota para o download do zip
app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'public/arquivos/AsteroidRampage3.zip');
    res.download(file, 'AsteroidRampage.zip'); //"res.download" força o navegador a baixar
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });  