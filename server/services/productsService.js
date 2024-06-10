const prodsRepo = require('../repositories/productsRepo');

const getAllProducts = (filters = {}) => {
  return prodsRepo.getAllProducts(filters);
};

const addProduct = (obj) => {
  return prodsRepo.addProduct(obj);
};

module.exports = {
  getAllProducts,
  addProduct,
};
