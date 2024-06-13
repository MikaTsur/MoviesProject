import { useState } from "react";
import { useDispatch } from "react-redux";
import { doAddMovie } from "../redux/actions";

const AddMovie = () => {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({ serialNo: "", name: "", price: 0 });

  return (
    <div
      style={{
        border: "3px solid red",
        width: "300px",
        height: "150px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h3>Order New Movie</h3>
      Serial No.:{" "}
      <input
        type="number"
        onChange={(e) => setMovie({ ...movie, serialNo: e.target.value })}
      />
      <br />
      Name:{" "}
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
      />
      <br />
      Price:{" "}
      <input
        type="number"
        onChange={(e) => setMovie({ ...movie, price: +e.target.value })}
      />
      <br />
      <button onClick={() => dispatch(doAddMovie(movie))}>Add</button>
    </div>
  );
};

export default AddMovie;
