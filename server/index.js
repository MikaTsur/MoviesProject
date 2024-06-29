// C:\Users\morellyo\react_project\ex\server\index.js
const express = require("express");
const cors = require("cors");
const { connectMoviesDB } = require("./configs/db");

const moviesController = require("./controllers/moviesController");
const subscriptionsController = require("./controllers/subscriptionsController");
const usersController = require("./controllers/usersController");
const authController = require("./controllers/authController"); // Import the auth controller

const app = express();
const PORT = 3011;

const moviesDB = connectMoviesDB();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesController);
app.use("/subscriptions", subscriptionsController);
app.use("/users", usersController);
app.use("/auth", authController); // Use the auth controller

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
