const Product = require('../models/productModel');

// Get All
const getAllProducts = (filters) => {
  return Product.find(filters);
};

// Create
const addProduct = (obj) => {
  const per = new Product(obj);
  return per.save();
};

module.exports = {
  getAllProducts,
  addProduct,
};
