// C:\Users\morellyo\react_project\ex\server\controllers\moviesController.js  ========================
const express = require("express");
const moviesService = require("../services/moviesService");
const Movie = require("../models/movieModel");

const router = express.Router();

// GET endpoint to retrieve all movies from MongoDB
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error retrieving movies:", error);
    res.status(500).json({ error: "Failed to retrieve movies" });
  }
});

// POST endpoint to add a new movie to MongoDB
router.post("/", async (req, res) => {
  try {
    const { name, genres, image, premierd } = req.body;

    if (!name || !genres || !image || !premierd) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new Movie object based on the Mongoose schema
    const newMovie = new Movie({
      name,
      genres,
      image,
      premierd: parseInt(premierd), // Convert premierd to a Number
    });

    // Save the new movie to the database
    const savedMovie = await newMovie.save();

    res.status(200).json(savedMovie); // Respond with the saved movie document
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(500).json({ error: "Failed to add movie" });
  }
});

// DELETE endpoint to remove a movie by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await moviesService.deleteMovie(id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: "Failed to delete movie" });
  }
});

module.exports = router;

module.exports = router;
