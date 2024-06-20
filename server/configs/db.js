const mongoose = require("mongoose");

// Function to connect to the movies database
const connectMoviesDB = () => {
  const moviesDB = mongoose.createConnection(
    "mongodb://127.0.0.1:27017/movie_database",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  moviesDB.on("connected", () => {
    console.log("Connected to movie_database");
  });

  moviesDB.on("error", (error) => {
    console.log("Error connecting to moviesDB:", error);
  });

  return moviesDB;
};

module.exports = {
  connectMoviesDB,
};
