let movies = [ // lista de filmes da aula passada
    { id: 1, title: "O Senhor dos Anéis", genre: "Fantasia", year: 2001 },
    { id: 2, title: "Matrix", genre: "Ficção Científica", year: 1999 }
]; // Sua lista de filmes

const express = require('express'); //importando o express
const app = express(); //criando uma aplicação Express
app.use(express.json()); //permite trabalhar com dados JSON

// Inicia o servidor na porta 3000
app.listen(4000, () => console.log('Servidor rodando na porta 4000'));

console.log("");

app.get('/read', (req, res) => {
    res.status(200).json(movies); // Retorna o array de filmes como resposta
});