let movies = [
    { id: 1, title: "Interestelar", genre: "Ficção Científica/Aventura", year: 2014 },
    { id: 2, title: "Matrix", genre: "Ficcção Científica", year: 1999 }
];

movies.push({ id: 3, title: "Bolt-Supercão", genre: "Animação", year: 2008 });

console.log(movies);

let movieToUpdate = movies.find(movie => movie.id === 1);
if (movieToUpdate) {
    movieToUpdate.genre = "Ficção Científica";
    console.log(`Filme atualizado meu rei!: ${movieToUpdate.title}, Gênero: ${movieToUpdate.genre}`);
}

console.log(movies);