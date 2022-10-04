// changed all 'book' to article
const express = require('express');
const router = express.Router();

//connect to db
const conn = require("../config/db");

// Load Book model
const Article = require('../../models/Article');

// @route GET api/articles/test     
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/articles
// @description Get all books
// @access Public
router.get('/all-articles', (req, res) => {
  Article.find()
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ nobooksfound: 'No Articles found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ nobookfound: 'No articles found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(article => res.json({ msg: 'article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such article' }));
});

//listening on port
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = router 