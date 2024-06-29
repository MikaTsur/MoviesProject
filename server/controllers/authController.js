// C:\Users\morellyo\react_project\ex\server\controllers\authController.js
const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:", { username, password }); // Debugging

  try {
    const user = await User.findOne({ username });
    console.log("User found:", user); // Debugging

    if (!user || user.password !== password) {
      console.log("Invalid credentials"); // Debugging
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.log("Error during login:", error); // Debugging
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
