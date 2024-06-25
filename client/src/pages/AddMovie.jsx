// ex\client\src\pages\AddMovie.jsx   ========================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderButtons from "../components/HeaderButtons";
import "./FormStyles.css"; // Import the reusable CSS file

const AddMovie = ({ onAddMovie }) => {
  const [movieName, setMovieName] = useState("");
  const [genres, setGenres] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [premiered, setPremiered] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!movieName || !genres || !imageUrl || !premiered) {
      setError("All fields are required");
      return;
    }

    const newMovie = {
      name: movieName,
      genres: genres.split(",").map((genre) => genre.trim()), // Convert to array
      image: imageUrl,
      premierd: parseInt(premiered, 10), // Ensure premiered is a number
    };
    console.log("New Movie:", newMovie); // Check the format of newMovie

    try {
      const { data } = await axios.post(
        "http://localhost:3011/movies",
        newMovie
      );
      onAddMovie(data); // Call the function to update the state
      navigate("/movies"); // Navigate to movies page after adding
    } catch (error) {
      console.error("Error adding movie:", error);
      setError(
        "Error adding movie: " + (error.response?.data?.error || error.message)
      );
    }
  };

  const handleCancel = () => {
    navigate("/movies");
  };

  return (
    <>
      <h3>Add Movie</h3>
      <HeaderButtons />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={movieName}
              onChange={handleInputChange(setMovieName)}
              placeholder="Enter movie name"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Genres:
            <input
              type="text"
              value={genres}
              onChange={handleInputChange(setGenres)}
              placeholder="Enter genres separated by commas"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={handleInputChange(setImageUrl)}
              placeholder="Enter image URL"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Premiered (year):
            <input
              type="text"
              value={premiered}
              onChange={handleInputChange(setPremiered)}
              placeholder="Enter premiere year"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="button-group">
          <button type="submit" className="button">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddMovie;
