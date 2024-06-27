// C:\Users\morellyo\react_project\ex\server\index.js
const express = require("express");
const cors = require("cors");
const { connectMoviesDB } = require("./configs/db");

const moviesController = require("./controllers/moviesController");
const subscriptionsController = require("./controllers/subscriptionsController"); // Add this line

const app = express();
const PORT = 3011;

const moviesDB = connectMoviesDB();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesController);
app.use("/subscriptions", subscriptionsController); // Add this line

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
