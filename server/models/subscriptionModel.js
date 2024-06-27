//C:\Users\morellyo\react_project\ex\server\models\subscriptionModel.js ========================
const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    city: {
      type: String, // Change type to array of strings
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
