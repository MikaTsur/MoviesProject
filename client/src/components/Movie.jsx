// C:\Users\morellyo\react_project\ex\client\src\components\Movie.jsx

import React from "react";
import SingleMovieBox from "./SingleMovieBox";

const Movie = ({ movie, onDelete }) => {
  return <SingleMovieBox movie={movie} onDelete={onDelete} />;
};

export default Movie;
