// ex\client\src\pages\Movies.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList";
import Movie from "../components/Movie";

const MOVE_URL = "http://localhost:3011/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(MOVE_URL);
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>Movies</h3>
      <div>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
      <br />
      <br />
      <div style={{ width: "50%", float: "left" }}>
        <MoviesList />
      </div>
      <br />
      <br />
    </>
  );
};

export default Movies;
