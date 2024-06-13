const mongoose = require("mongoose");

const connectDB = () => {
  // Connect to the products database
  mongoose
    .connect("mongodb://127.0.0.1:27017/productsDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to productsDB"))
    .catch((error) => console.log(error));

  // Connect to the movies database
  mongoose
    .connect("mongodb://127.0.0.1:27017/moviesDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to moviesDB"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
