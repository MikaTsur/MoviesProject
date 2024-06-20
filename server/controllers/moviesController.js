const express = require("express");
const moviesService = require("../services/moviesService");

const router = express.Router();

// Entry Point: http://localhost:3000/movies

// Get All movies (from tvmaze)

router.get("/", async (req, res) => {
  try {
    const movies = await moviesService.getMovies2();
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create movie
router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await moviesService.addMovie(obj); // assuming addMovie method exists
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
