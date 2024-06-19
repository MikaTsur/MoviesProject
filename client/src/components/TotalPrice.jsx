import { useSelector } from "react-redux";

const TotalPrice = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div
      style={{
        border: "3px solid red",
        width: "150px",
        height: "50px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      Total Price: {movies.reduce((acc, move) => acc + move.price, 0)}
    </div>
  );
};

export default TotalPrice;
