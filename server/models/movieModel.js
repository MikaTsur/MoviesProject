const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genres: {
      type: [String], // Change type to array of strings
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    premierd: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
