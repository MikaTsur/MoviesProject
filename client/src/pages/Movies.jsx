//ex\client\src\pages\Movies.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList";

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
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((move, index) => {
            return (
              <tr key={index}>
                <td>{move.name}</td>
                <td>{move.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <div style={{ width: "50%", float: "left" }}>
        <MoviesList />
      </div>
    </>
  );
};

export default Movies;
