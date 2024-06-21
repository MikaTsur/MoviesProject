// ex\client\src\components\Movie.jsx
const Movie = ({ movie, onEdit, onDelete }) => {
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
      <div style={{ marginTop: "10px" }}>
        <button style={{ marginRight: "10px" }} onClick={() => onEdit(movie)}>
          Edit
        </button>
        <button onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Movie;
