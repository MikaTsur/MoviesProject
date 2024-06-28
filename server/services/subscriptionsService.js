//C:\Users\morellyo\react_project\ex\server\services\moviesService.js  ========================
const Subscription = require("../models/subscriptionModel");

const getSubscriptions = async () => {
  try {
    const subscriptions = await Subscription.find();
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
  addSubscription,
  deleteSubscription,
  updateSubscription,
};
