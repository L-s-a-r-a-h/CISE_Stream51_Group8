
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

// add article request to moderation list
app.post('/SubmitArticle', (req, res) => {
  console.log(req.body);
  articleSubmissions.create(req.body)
      .then(ArticleRequest => res.json({msg: 'Submission successful'}))
      .catch(err => res.status(400).json({error: 'Unable to submit this article'}));
});

// get all article requests
app.get('/all-articleRequests', (req, res) => {
  articleSubmissions.find()
  .then(ArticleSubmission => res.json(ArticleSubmission))
  .catch(err => res.status(404).json({error: 'No articles found la'}));

});




app.get('/articlesummary/:id', (req, res) => {
  articles.findById(req.params.id)
      .then(Article => res.json(Article))
      .catch(err => res.status(404).json({error: + 'No article found'}));
});


// Init Middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('connected to port'));
//app.get('/', (req, res) => res.send('/api/articles', articles));


/*const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000
*/

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log('Server running on port ${PORT}')});




//heroku
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});