//Vetor de objetos
let movies = [
    { id: 1, title: "Interestelar", genre: "Ficção Científica/Aventura", year: 2014, runtime: "169 minutes" },
    { id: 2, title: "Dragon Ball Z: A Batalha dos Deuses", genre: "Ação/Aventura", year: 2013, runtime: "105 minutes" }
];

let option = 1;
let contador = 0;

if (option == 1) {
    //C -> Create (Criando um filme)
    movies.push({ id: 3, title: "Ford vs Ferrari", genre: "Esporte/Ação", year: 2019, runtime: "152 minutes" });
    console.log(movies);
} else if (option == 2) {
    //R -> Read (Lendo/Listando todos os filmes)
    movies.forEach(movie => {
        contador += 1;
        console.log(`Título: ${movie.title}, Gênero: ${movie.genre}, Ano: ${movie.year}, Duração: ${movie.runtime}`);
});
    console.log(`Quantidade de filmes no Catálogo: ${contador}`);
} else if (option == 3) {
    //U -> Update (Atualizando/Alterando um filme)
    let movieToUpdate = movies.find(movie => movie.id === 5);
    if (movieToUpdate) {
        movieToUpdate.genre = "Romance";
        console.log(`Filme atualizado: ${movieToUpdate.title}, Novo gênero: ${movieToUpdate.genre}`);
        console.log(movies);
    } else {
        console.log("Vish, filme não encontrado.");
    }
} else if (option == 4) {
    //D -> Delete (Removendo um filme)
    let index = movies.findIndex(movie => movie.id === 2);
    if (index !== -1) {
        movies.splice(index, 1);
        console.log("Filme removido!");
        console.log(movies);
    } else {
        console.log("Filme não encontrado para exclusão.");
    }
} else {
    console.log("Hey cara, escolhe uma opção válida aí!");
}

//Aula 03
const express = require('express'); //importando o express
const app = express(); //criando uma aplicação Express
app.use(express.json()); //permite trabalhar com dados JSON

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

app.get('/', (req, res) => {
    res.send('Esta viivo!!');
});
app.get('/read', (req, res) => { //criamos a rota
    res.status(200).json(movies); //o retorno é a array de filmes
});