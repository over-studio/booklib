const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/books', (req, res) => {
	console.log('Book List!');
})

module.exports = router;

