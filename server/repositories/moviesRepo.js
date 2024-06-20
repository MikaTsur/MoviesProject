//C:\Users\morellyo\react_project\ex\server\repositories\moviesRepo.js
const axios = require("axios");

const MOVIES_URL = "https://api.tvmaze.com/shows";

const getMovies2 = () => {
  return axios.get(MOVIES_URL);
};

module.exports = { getMovies2 };
