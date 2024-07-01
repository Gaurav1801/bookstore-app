const express = require('express')
const router = express.Router();
const Book = require('./../models/book');

router.get('/', async(req, res) => {
    try {
        const newbook = await Book.find();
        res.status(200).json(newbook);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }
})
module.exports = router;