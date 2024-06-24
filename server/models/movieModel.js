// C:\Users\morellyo\react_project\ex\server\models\movieModel.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genres: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    premierd: {
      type: Number, // Change type to Number for storing just the year
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
