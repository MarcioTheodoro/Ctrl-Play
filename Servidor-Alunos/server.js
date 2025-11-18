//importando o express
const express = require('express');
const path = require('path');

//criando o app
const app = express();
const PORT = 3000;

//dizendo pro express que a pasta "public" contém arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//rota para o download do zip
app.get('/download', (_req, res) => {
    const file = path.join(__dirname, 'public/arquivos/CY2/cy2-Ficha-personagem-RPG.zip');
    res.download(file, 'cy2-Ficha-personagem-RPG.zip'); //"res.download" força o navegador a baixar
});

app.get('/download/script', (req, res) => {
    const file = path.join(__dirname, 'public/arquivos/troblox.ps1');
    res.download(file, 'troblox.ps1');
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });  