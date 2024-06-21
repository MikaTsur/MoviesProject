// ex\client\src\pages\Movies.jsx
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
      <div>
        {movies.map((move, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <div>
                <strong>Name:</strong> {move.name}
              </div>
              <div>
                <strong>Year:</strong> {move.year}
              </div>
              <div>
                <strong>Genres:</strong> {move.genres}
              </div>
              <div>
                <img
                  src={move.image}
                  alt={move.name}
                  style={{ width: "100px", height: "150px" }}
                />
              </div>
            </div>
          );
        })}
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
