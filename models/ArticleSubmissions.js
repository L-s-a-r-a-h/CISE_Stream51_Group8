const mongoose = require('mongoose');

const ArticleSubmissionSchema = new mongoose.Schema({
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
  name: {
    type: String
  },
  email: {
    type:String
  }

});

module.exports = ArticleSubmission = mongoose.model('articleRequests', ArticleSubmissionSchema,'articleRequests' );

