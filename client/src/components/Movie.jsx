// src/components/Movie.jsx ================================

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Movie = ({ movie, onDelete }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/100x150"; // Placeholder image for errors
  };

  const handleEdit = () => {
    navigate(`/edit-movie/${movie._id}`); // Navigate to edit page with the movie's ID
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
          onError={handleImageError}
          style={{ width: "100px", height: "150px" }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleEdit} style={{ marginRight: "10px" }}>
          Edit
        </button>
        <button onClick={() => onDelete(movie._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Movie;
