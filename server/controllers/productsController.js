const express = require("express");
const prodsService = require("../services/productsService");

const router = express.Router();

// Entry Point: http://localhost:3000/products

// Get All Products
router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const products = await prodsService.getAllProducts(filters);
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});

// Create a new Product
router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await prodsService.addProduct(obj);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
