const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
  headline: {
    type: String
    },
  date: {
    type: String
  },
  url: {
    type: String,
    required: true,
    unique: true
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;