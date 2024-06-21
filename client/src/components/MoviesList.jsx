import { useSelector } from "react-redux";
import axios from "axios";
// import Movie from "./Movie";

const MOVES_URL = "http://localhost:3011/movies";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);

  return (
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
  );
};

export default MoviesList;
