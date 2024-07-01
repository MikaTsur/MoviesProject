//C:\Users\morellyo\react_project\ex\server\services\moviesService.js  ========================
const Movie = require("../models/movieModel");
const Subscription = require("../models/subscriptionModel");

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
    await Subscription.updateMany(
      { "moviesWatched.movieId": id },
      { $pull: { moviesWatched: { movieId: id } } }
    );
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (id, movieData) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    throw error;
  }
};

module.exports = { getMovies, addMovie, deleteMovie, updateMovie };
