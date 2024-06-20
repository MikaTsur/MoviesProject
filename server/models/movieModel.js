//C:\Users\morellyo\react_project\ex\server\models\movieModel.js

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: String,
    year: Date,
    genres: String,
    image: String,
    //premierd: Date,
  },
  { versionKey: false }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
