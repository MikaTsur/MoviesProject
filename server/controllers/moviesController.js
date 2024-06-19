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

// Create

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await movesService.addMovie(obj);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
