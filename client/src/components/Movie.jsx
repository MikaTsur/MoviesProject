import { useDispatch } from "react-redux";
import { doRemoveMovie } from "../redux/actions";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "3px solid green",
        width: "250px",
        height: "150px",
        padding: "10px",
        marginBottom: "10px",
        textAlign: "center",
      }}
    >
      <h4>Movie Data</h4>
      Serial No.: {movie.serialNo} <br />
      Name: {movie.name} <br />
      Price: {movie.price} <br />
      <br />
      <button onClick={() => dispatch(doRemoveMovie(movie.serialNo))}>
        Remove
      </button>
    </div>
  );
};

export default Movie;
