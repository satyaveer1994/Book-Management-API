
const express = require('express');
const router = express.Router();
const bookController = require('../Controller/BookController');
const { requireAuth } = require('../Middleware/authMiddleware');

router.get('/getbook', bookController.getAllBooks);
router.post('/addbook', requireAuth, bookController.createBook);
router.get('/filterbook', bookController.filterBooks);

module.exports = router;
