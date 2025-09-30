const express = require("express");
const connectDB = require("./config/config");
const Book = require("./models/book");
const app = express();
connectDB();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000, yeah"));

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