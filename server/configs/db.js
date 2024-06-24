// // C:\Users\morellyo\react_project\ex\server\configs\db.js
const mongoose = require("mongoose");

// Function to connect to the movies database
const connectMoviesDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/movie_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Optionally, add more options as needed
    // Example: useFindAndModify: false, useCreateIndex: true
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });

  return db;
};

module.exports = {
  connectMoviesDB,
};
