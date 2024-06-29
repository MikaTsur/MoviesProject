// C:\Users\morellyo\react_project\ex\server\controllers\usersController.js  ========================
const express = require("express");
const usersService = require("../services/usersService");
const User = require("../models/userModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new User object based on the Mongoose schema
    const newUser = new User({
      username,
      password,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(200).json(savedUser); // Respond with the saved user document
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to add user" });
  }
});

module.exports = router;
