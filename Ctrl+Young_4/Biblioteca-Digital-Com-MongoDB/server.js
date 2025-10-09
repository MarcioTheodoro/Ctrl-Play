const express = require("express");
const connectDB = require("./config/config");
//const validateTitle = require("./middlewares/validateTitle");
const Book = require("./models/book");
const User = require("./models/user");
const app = express();
connectDB();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000, yeah"));


//Livros
//CREATE
app.post("/api/books", async (req, res) => {
    try{
        const { title, author, year, genre } = req.body;
        const newBook = new Book({ title, author, year, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar livro" });
    }
});

//READ
app.get("/api/books", async (req, res) => {
    try{
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
});

app.get("/api/books/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const book = await Book.findById(id);   

        if (!book) {
            return res.status(404).json({ error: "Livro não encontrado" });
        }

        res.json(book);
    } catch (err) {
        next(err); //O erro vai lá pro middleware de tratamento
    }
});

//UPDATE
app.patch("/api/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const options = { new: true, runValidators: true };

        const updatedBook = await Book.findByIdAndUpdate(id, updates, options);
        if (!updatedBook)
            return res.status(404).json({ error: "Livro não encontrado" });

        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar livro" });
    }
});

//DELETE
app.delete("/api/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook)
            return res.status(404).json({ error: "Livro não encontrado" });
        res.json({ message: "Livro excluído com sucesso" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao excluir livro" });
    }
});

//Usuários
app.post("/api/users", async (req, res) => {
    try{
        const { name, email, phone, age } = req.body;
        const newUser = new User({name, email, phone, age});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
});

app.get("/api/users", async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
});

app.get("/api/users/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar o usuário" });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro no servidor." });
});

/*app.get("/dividir", (req, res) => {
    try {
        const numerador = 10;
        const denominador = 0;

        if (denominador === 0) {    
            //res.status(400).json({ error: "Não é possível dividir por zero genius!" });
            throw new Error("Não dá pra dividir por zero!");
            //return;
        }

        const resultado = numerador / denominador;
        res.json({ resultado });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});*/