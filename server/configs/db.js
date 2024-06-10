const mongoose = require('mongoose');

const connectDB = () => {
  // port 27017 is the default port for MongoDB
  mongoose
    .connect('mongodb://127.0.0.1:27017/productsDB')
    .then(() => console.log('Connected to productsDB'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
