const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const Article = require("./models/article.js");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve up static assets
app.use(express.static("client/build"));
// add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// set up promises with mongoose
mongoose.Promise = global.Promise;
// connect to mongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"),
  {
    useMongoClient: true
  };

// start API server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
