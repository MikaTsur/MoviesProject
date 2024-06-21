// ex\client\src\components\MoviesList.jsx
import { useSelector } from "react-redux";
import Movie from "./Movie";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
