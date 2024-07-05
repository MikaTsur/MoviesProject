const Subscription = require("../models/subscriptionModel");

const getSubscriptions = async () => {
  try {
    const subscriptions = await Subscription.find().populate(
      "moviesWatched.movieId"
    );
    return subscriptions;
  } catch (error) {
    throw error;
  }
};

const searchSubscriptions = async (searchTerm) => {
  try {
    const regex = new RegExp(searchTerm, "i"); // Case-insensitive search
    const subscriptions = await Subscription.find({
      $or: [{ fullname: regex }, { email: regex }, { city: regex }],
    }).populate("moviesWatched.movieId");
    return subscriptions;
  } catch (error) {
    throw error;
  }
};

const addSubscription = async (subscriptionData) => {
  try {
    const newSubscription = new Subscription(subscriptionData);
    const savedSubscription = await newSubscription.save();
    return savedSubscription;
  } catch (error) {
    throw error;
  }
};

const deleteSubscription = async (id) => {
  try {
    await Subscription.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

const updateSubscription = async (id, subscriptionData) => {
  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      id,
      subscriptionData,
      {
        new: true,
      }
    );
    return updatedSubscription;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSubscriptions,
  searchSubscriptions,
  addSubscription,
  deleteSubscription,
  updateSubscription,
};
