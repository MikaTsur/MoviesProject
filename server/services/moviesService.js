const usersRepo = require("../repositories/moviesRepo");

const getAllMovies = async () => {
  let { data: movies } = await usersRepo.getAllMovies();

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
