// C:\Users\morellyo\react_project\ex\server\models\movieModel.js ========================
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: [String], // Change type to array of strings
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

const User = mongoose.model("User", userSchema);

module.exports = User;
