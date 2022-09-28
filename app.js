
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// routes
const articles = require('./models/Article');

// cors
app.use(cors({ origin: true, credentials: true }));


// Connect Database
connectDB();

// add article request to moderation list
app.post('/SubmitArticle', (req, res) => {
  console.log(req.body);
  articles.create(req.body)
      .then(book => res.json({msg: 'Submission successful'}))
      .catch(err => res.status(400).json({error: 'Unable to submit this article'}));
});



// Init Middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('connected to port'));
//app.get('/', (req, res) => res.send('/api/articles', articles));


const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running on port ${PORT}'));



//heroku
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});