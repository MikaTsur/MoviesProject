// C:\Users\morellyo\react_project\ex\server\controllers\moviesController.js  ========================
const express = require("express");
const moviesService = require("../services/moviesService");
const router = express.Router();

// GET endpoint to retrieve all movies from MongoDB
router.get("/", async (req, res) => {
  try {
    const movies = await moviesService.getMovies();
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

    const newMovie = { name, genres, image, premierd: parseInt(premierd) };
    const savedMovie = await moviesService.addMovie(newMovie);

    res.status(200).json(savedMovie); // Respond with the saved movie document
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(500).json({ error: "Failed to add movie" });
  }
});

// DELETE endpoint to remove a movie by ID and update subscriptions
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await moviesService.deleteMovie(id);

    res
      .status(200)
      .json({
        message: "Movie and related subscriptions updated successfully",
      });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: "Failed to delete movie" });
  }
});

// PUT endpoint to update a movie by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, genres, image, premierd } = req.body;

    if (!name || !genres || !image || !premierd) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const updatedMovie = { name, genres, image, premierd: parseInt(premierd) };
    const movie = await moviesService.updateMovie(id, updatedMovie);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({ error: "Failed to update movie" });
  }
});

// GET endpoint to retrieve a single movie by ID from MongoDB
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await moviesService.getMovies(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error("Error retrieving movie:", error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(500).json({ error: "Failed to retrieve movie" });
  }
});

module.exports = router;
