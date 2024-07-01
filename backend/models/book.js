const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: String,
    image: {
        type: String,
        required: true
    }

});


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;