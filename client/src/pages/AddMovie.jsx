// ex\client\src\pages\AddMovie.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "../components/HeaderButtons";
import "./FormStyles.css"; // Import the reusable CSS file

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [genres, setGenres] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [premiered, setPremiered] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMovie = {
      name: movieName,
      genres: genres.split(",").map((genre) => genre.trim()),
      image: imageUrl,
      premiered: premiered,
    };
    console.log("New Movie:", newMovie);
    // TODO: Send newMovie to server
  };

  const handleCancel = () => {
    navigate("/movies");
  };

  return (
    <>
      <h3>Add Movie</h3>
      <HeaderButtons />
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
            Premiered (dd/mm/yyyy):
            <input
              type="text"
              value={premiered}
              onChange={handleInputChange(setPremiered)}
              placeholder="Enter premiere date"
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
