const express = require("express");
const cors = require("cors");
const { connectMoviesDB } = require("./configs/db");

const moviesController = require("./controllers/moviesController");

const app = express();
const PORT = 3011;

const moviesDB = connectMoviesDB();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
