
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const articles = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('connected to port'));

// use Routes
app.use('/api/articles', articles);


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