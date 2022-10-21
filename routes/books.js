const express = require('express');
const router = express.Router();
const { Book, validateBook } = require('../models/books');


// get
router.get('/', async(req, res) => {
    try {
        const response = await Book.find();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err });
    }
})

// get book by id
router.get('/:bookId', async(req, res) => {
    // Book.findById(req.params.bookId)
    //     .then((book) => {
    //         if (book) res.send(book);
    //         res.status(404).send("Book not found");
    //     })
    //     .catch((error) => {
    //         res.status(500).send(error.message)
    //     })
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) {
            res.status(404).send('book not found!')
        } else {
            res.send(book);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// post -> create book
router.post('/', async(req, res) => {
        // call validate
        const error = await validateBook(req.body);
        if (error.message) res.status(400).send(error.message);
        const book = new Book({
            name: req.body.bookName,
            author: {
                name: req.body.authorName,
                age: req.body.authorAge
            },
            genre: req.body.genre,
        });

        book.save().then(book => {
            res.send(book);
        }).catch(error => {
            res.status(500).send("Something wrong!, Book was not stored in database!");
            // res.status(500).json({ message: 'error' });
        })
    })
    // update book 
router.put('/:bookId', async(req, res) => {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.bookId, {
                name: req.body.bookName,
                author: {
                    name: req.body.authorName,
                    age: req.body.authorAge,
                },
                genre: req.body.genre,
            }, { new: true }
        );
        if (!updatedBook) {
            res.status(404).send('book not found!')
        } else {
            res.send(updatedBook);
        }
    })
    // delete book
router.delete('/:bookId', async(req, res) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.bookId);
        if (!book) {
            res.status(404).send('book not found!')
        } else {
            res.send(book);
        }
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;