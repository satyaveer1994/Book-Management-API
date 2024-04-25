
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true,
        min: [1000, 'Invalid publication year'],
        max: [new Date().getFullYear(), 'Invalid publication year']
    }
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
