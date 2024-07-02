import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderButtons from "../components/HeaderButtons";
import "./FormStyles.css"; // Import the reusable CSS file

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    name: "",
    genres: [],
    image: "",
    premierd: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3011/movies/${id}`);
        setMovie({
          ...response.data,
          genres: response.data.genres || [],
        });
      } catch (error) {
        console.error("Failed to fetch movie", error);
        navigate("/movies"); // Redirect if the fetch fails
      }
    };
    fetchMovie();
  }, [id, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "genres") {
      setMovie((prev) => ({
        ...prev,
        genres: value.split(",").map((item) => item.trim()), // Ensure genres are always treated as an array
      }));
    } else {
      setMovie((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !movie.name ||
      !movie.genres.length ||
      !movie.image ||
      !movie.premierd
    ) {
      setError("All fields are required");
      return;
    }
    try {
      await axios.put(`http://localhost:3011/movies/${id}`, movie);
      navigate("/movies"); // Navigate to movies list on success
    } catch (error) {
      console.error("Failed to update movie", error);
      setError("Failed to update movie");
    }
  };

  const handleCancel = () => {
    navigate("/movies");
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <h3>Edit Movie</h3>
      <HeaderButtons />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={movie.name}
              onChange={handleChange}
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
              name="genres"
              value={movie.genres.join(", ")} // Safely join genres for display
              onChange={handleChange}
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
              name="image"
              value={movie.image}
              onChange={handleChange}
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
              type="number"
              name="premierd"
              value={movie.premierd}
              onChange={handleChange}
              placeholder="Enter premiere year"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="button-group">
          <button type="submit" className="button">
            Update Movie
          </button>
          <button type="button" onClick={handleCancel} className="button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditMovie;
