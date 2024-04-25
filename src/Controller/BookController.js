// controllers/bookController.js
const Book = require('../Model/BookModel');

// Function to retrieve all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to create a new book
const createBook = async (req, res) => {
    const { title, author, publicationYear } = req.body;

    try {
        const book = await Book.create({ title, author, publicationYear });
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Function to filter books by author or publication year
const filterBooks = async (req, res) => {
    const { author, publicationYear } = req.query;
    const filter = {};

    if (author) {
        filter.author = author;
    }

    if (publicationYear) {
        filter.publicationYear = publicationYear;
    }

    try {
        const books = await Book.find(filter);
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllBooks,
    createBook,
    filterBooks
};
