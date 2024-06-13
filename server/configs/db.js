const mongoose = require("mongoose");

// Function to connect to the products database
const connectProductsDB = () => {
  const productsDB = mongoose.createConnection(
    "mongodb://127.0.0.1:27017/productsDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  productsDB.on("connected", () => {
    console.log("Connected to productsDB");
  });

  productsDB.on("error", (error) => {
    console.log("Error connecting to productsDB:", error);
  });

  return productsDB;
};

// Function to connect to the movies database
const connectMoviesDB = () => {
  const moviesDB = mongoose.createConnection(
    "mongodb://127.0.0.1:27017/moviesDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  moviesDB.on("connected", () => {
    console.log("Connected to moviesDB");
  });

  moviesDB.on("error", (error) => {
    console.log("Error connecting to moviesDB:", error);
  });

  return moviesDB;
};

module.exports = {
  connectProductsDB,
  connectMoviesDB,
};
