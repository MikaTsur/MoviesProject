//C:\Users\morellyo\react_project\ex\server\services\moviesService.js  ========================
const Movie = require("../models/movieModel");

const getMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw error;
  }
};

const addMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    const savedMovie = await newMovie.save();
    return savedMovie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (id) => {
  try {
    await Movie.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getMovies, addMovie, deleteMovie };
