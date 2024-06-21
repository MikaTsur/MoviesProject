// ex\client\src\components\MoviesList.jsx
import { useSelector } from "react-redux";
import MovieCard from "./Movie";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
