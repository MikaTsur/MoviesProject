const express = require("express");
const moviesService = require("../services/moviesService");

const router = express.Router();

// Entry Point: http://localhost:3000/movies

// Get All movies
router.get("/", async (req, res) => {
  try {
    const movies = await moviesService.getAllMovies();
    res.send(movies);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
