//C:\Users\morellyo\react_project\ex\server\services\usersService.js  ========================
const Movie = require("../models/userModel");

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const addUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { getUsers, addUser };
