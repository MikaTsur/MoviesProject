import { useSelector } from "react-redux";
import axios from "axios";
// import Movie from "./Movie";

const MOVES_URL = "http://localhost:3011/movies";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);

  // const makeOrder = () => {
  //   movies.forEach((move) => {
  //     axios.post(MOVES_URL, move);
  //   });
  // };

  return (
    <div
      style={{
        border: "3px solid blue",
        width: "300px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      {/* <h3>Movie name</h3>
      {movies.map((move) => {
        return <Movie key={move.serialNo} movie={move} />;
      })}
      <button onClick={makeOrder}>Edit</button>
      <button onClick={makeOrder}>Delete</button> */}
    </div>
  );
};

export default MoviesList;
