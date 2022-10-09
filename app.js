
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// routes
const articles = require('./models/Article');
const articleSubmissions = require('./models/ArticleSubmissions');

// cors
app.use(cors({ origin: true, credentials: true }));


// Connect Database
  connectDB();

//routes
app.get('/test', (req, res) => res.send('article route testing!'));

// get all articles in the db
app.get('/all-articles', (req, res) => {
  articles.find()
      .then(Articles => res.json(Articles))
      .catch(err => res.status(404).json({error: 'No articles found la'}));
});

// get all article requests
app.get('/all-articleRequests', (req, res) => {
  articleSubmissions.find()
  .then(ArticleSubmission => res.json(ArticleSubmission))
  .catch(err => res.status(404).json({error: 'No articles found la'}));

});

//request an article
app.post('/request-article', (req, res) => {
  console.log(req.body);
  articleSubmissions.create(req.body)
      .then(ArticleSubmission => res.json({msg: 'article requested'}))
      .catch(err => res.status(400).json({error: 'Unable to submit this request'}));
});

//get summary and data of the article
app.get('/articlesummary/:id', (req, res) => {
  articles.findById(req.params.id)
      .then(Article => res.json(Article))
      .catch(err => res.status(404).json({error: + 'No article found'}));
});

//search for an article
app.get('/search/:keyword', (req, res) => {
  articles.find({
      $or: [
          {
              title:
                  {$regex: new RegExp("^" + req.params.keyword.toLowerCase(), "i")}
          },
          {
              authors:
                  {$regex: new RegExp("^" + req.params.keyword.toLowerCase(), "i")}
          }
      ]
  })
      .then(books => res.json(books))
      .catch(err => res.json(err));
});

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('connected to port'));

/*const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000
*/

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running on port ${PORT}'));




//heroku
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});