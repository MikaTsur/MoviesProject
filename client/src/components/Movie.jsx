// ex\client\src\components\Movie.jsx
const Movie = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <div>
        <strong>Name:</strong> {movie.name}
      </div>
      <div>
        <strong>Year:</strong> {movie.year}
      </div>
      <div>
        <strong>Genres:</strong> {movie.genres}
      </div>
      <div>
        <img
          src={movie.image}
          alt={movie.name}
          style={{ width: "100px", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default Movie;
