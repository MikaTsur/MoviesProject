const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllCustomers = () => {
  return axios.get(USERS_URL);
};

module.exports = { getAllCustomers };
