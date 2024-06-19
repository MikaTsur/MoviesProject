const moviesRepo = require("../repositories/moviesRepo");

const getAllMovies = async () => {
  let { data: movies } = await moviesRepo.getAllMovies();

  //table

  movies = movies.map((cust) => {
    return {
      name: cust.name,
      email: cust.email,
      city: cust.address.city,
    };
  });

  return movies;
};

module.exports = { getAllMovies };
