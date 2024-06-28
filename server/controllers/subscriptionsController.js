// C:\Users\morellyo\react_project\ex\server\controllers\subscriptionsController.js  ========================
const express = require("express");
const subscriptionsService = require("../services/moviesService");
const Subscription = require("../models/subscriptionModel");

const router = express.Router();

// GET endpoint to retrieve all subscriptions from MongoDB
router.get("/", async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error("Error retrieving subscriptions:", error);
    res.status(500).json({ error: "Failed to retrieve subscriptions" });
  }
});

// POST endpoint to add a new subscription to MongoDB
router.post("/", async (req, res) => {
  try {
    const { fullname, email, city } = req.body;

    if (!fullname || !email || !city) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new Subscription object based on the Mongoose schema
    const newSubscription = new Subscription({
      fullname,
      email,
      city,
    });

    // Save the new Subscription to the database
    const savedSubscription = await newSubscription.save();

    res.status(200).json(savedSubscription); // Respond with the saved subscription document
  } catch (error) {
    console.error("Error adding subscription:", error);
    res.status(500).json({ error: "Failed to add subscription" });
  }
});

// DELETE endpoint to remove a subscription by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await subscriptionsService.deleteSubscription(id);
    res.status(200).json({ message: "Subscription deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    res.status(500).json({ error: "Failed to delete subscription" });
  }
});

// PUT endpoint to update a subscription by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, city } = req.body;

    if (!fullname || !email || !city) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const updatedSubscription = await Subscription.findByIdAndUpdate(
      id,
      { fullname, email, city },
      { new: true }
    );

    if (!updatedSubscription) {
      return res.status(404).json({ error: "subscription not found" });
    }

    res.status(200).json(updatedSubscription);
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ error: "Failed to update subscription" });
  }
});

// GET endpoint to retrieve a single subscription by ID from MongoDB
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscription = await Subscription.findById(id);
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }
    res.status(200).json(subscription);
  } catch (error) {
    console.error("Error retrieving subscription:", error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ error: "Subscription not found" });
    }
    res.status(500).json({ error: "Failed to retrieve subscription" });
  }
});

module.exports = router;
