const express = require("express");
const Subscription = require("../models/subscriptionModel");
const Movie = require("../models/movieModel");

const router = express.Router();

// GET endpoint to retrieve all subscriptions from MongoDB
router.get("/", async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate(
      "moviesWatched.movieId"
    );
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

    const newSubscription = new Subscription({ fullname, email, city });
    const savedSubscription = await newSubscription.save();

    res.status(200).json(savedSubscription);
  } catch (error) {
    console.error("Error adding subscription:", error);
    res.status(500).json({ error: "Failed to add subscription" });
  }
});

// DELETE endpoint to remove a subscription by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Subscription.findByIdAndDelete(id);
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
      return res.status(404).json({ error: "Subscription not found" });
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
    const subscription = await Subscription.findById(id).populate(
      "moviesWatched.movieId"
    );
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

// POST endpoint to add a movie subscription to a member
router.post("/:id/add-movie", async (req, res) => {
  try {
    const { id } = req.params;
    const { movieId, date } = req.body;

    console.log("Received movieId:", movieId);
    console.log("Received date:", date);

    if (!movieId || !date) {
      return res.status(400).json({ error: "Movie ID and date are required" });
    }

    const movie = await Movie.findById(movieId);
    if (!movie) {
      console.error("Movie not found for ID:", movieId);
      return res.status(404).json({ error: "Movie not found" });
    }

    const subscription = await Subscription.findById(id);
    if (!subscription) {
      console.error("Subscription not found for ID:", id);
      return res.status(404).json({ error: "Subscription not found" });
    }

    subscription.moviesWatched.push({ movieId, date });
    await subscription.save();

    // Populate moviesWatched after saving
    const populatedSubscription = await Subscription.findById(id).populate(
      "moviesWatched.movieId"
    );

    res.status(200).json(populatedSubscription);
  } catch (error) {
    console.error("Error adding movie to subscription:", error);
    res.status(500).json({ error: "Failed to add movie to subscription" });
  }
});

module.exports = router;
