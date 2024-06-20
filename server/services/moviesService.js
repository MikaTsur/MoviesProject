//C:\Users\morellyo\react_project\ex\server\services\moviesService.js
const moviesRepo = require("../repositories/moviesRepo");

const getMovies2 = async () => {
  let { data: movies2 } = await moviesRepo.getMovies2();

  // Limit to 10 results
  movies2 = movies2.slice(0, 10);

  movies2 = movies2.map((movie) => {
    return {
      name: movie.name,
      year: new Date(movie.premiered).getFullYear(),
      genres: movie.genres.join(", "),
      image: movie.image ? movie.image.medium : null,
    };
  });

  return movies2;
};

module.exports = { getMovies2 };
