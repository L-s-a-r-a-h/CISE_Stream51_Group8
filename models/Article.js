const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  published_year: {
    type: String
  },
  doi: {
    type: String
  },
  source: {
    type: String
  },
  claim: {
    type: String
  },
  evidence: {
    type:String
  }

});

module.exports = Article = mongoose.model('article', ArticleSchema);