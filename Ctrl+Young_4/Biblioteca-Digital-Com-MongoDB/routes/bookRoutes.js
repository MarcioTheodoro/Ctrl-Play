const express = require("express");
const router = express.Router();
//const Book = require("../models/book");
const bookController = require('../controllers/bookController');

router.post("/books", bookController.createBook);
router.get("/books", bookController.readBooks);
router.get("/books/:id", bookController.readBooksById);
router.patch("/books/:id", bookController.updateBook);
/*router.post("/books", async (req, res) => {
    try {
        const { title, author, year, genre } = req.body;
        const newBook = new Book({ title, author, year, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar livro" });
    }
});*/

/*router.get("/books", async (req, res) => {
    try{
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
});*/

module.exports = router;