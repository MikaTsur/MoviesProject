// ex\client\src\components\Movie.jsx   ========================
// const Movie = ({ movie, onEdit, onDelete }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         margin: "10px",
//         padding: "10px",
//       }}
//     >
//       <div>
//         <strong>Name:</strong> {movie.name}
//       </div>
//       <div>
//         <strong>Year:</strong> {movie.premierd}
//       </div>
//       <div>
//         <strong>Genres:</strong> {movie.genres.join(", ")}
//       </div>
//       <div>
//         <img
//           src={movie.image}
//           alt={movie.name}
//           style={{ width: "100px", height: "150px" }}
//         />
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <button style={{ marginRight: "10px" }} onClick={() => onEdit(movie)}>
//           Edit
//         </button>
//         <button onClick={() => onDelete(movie._id)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default Movie;

import React from "react";

const Movie = ({ movie, onEdit, onDelete }) => {
  // Log the movie object to verify the data
  console.log("Movie object:", movie);

  // Function to handle image loading error
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/100x150"; // Placeholder image
  };

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
        <strong>Year:</strong> {movie.premierd}
      </div>
      <div>
        <strong>Genres:</strong>{" "}
        {Array.isArray(movie.genres) ? movie.genres.join(", ") : movie.genres}
      </div>
      <div>
        <img
          src={movie.image}
          alt={movie.name}
          style={{ width: "100px", height: "150px" }}
          onError={handleImageError}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button style={{ marginRight: "10px" }} onClick={() => onEdit(movie)}>
          Edit
        </button>
        <button onClick={() => onDelete(movie._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Movie;
