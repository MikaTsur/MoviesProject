import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    name: "",
    genres: [],
    image: "",
    premierd: "",
  });

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
    try {
      const { data } = await axios.put(
        `http://localhost:3011/movies/${id}`,
        movie
      );
      navigate("/movies"); // Navigate to movies list on success
    } catch (error) {
      console.error("Failed to update movie", error);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={movie.name}
        onChange={handleChange}
        placeholder="Enter movie name"
      />
      <input
        type="text"
        name="genres"
        value={movie.genres.join(", ")} // Safely join genres for display
        onChange={handleChange}
        placeholder="Enter genres separated by commas"
      />
      <input
        type="text"
        name="image"
        value={movie.image}
        onChange={handleChange}
        placeholder="Enter image URL"
      />
      <input
        type="number"
        name="premierd"
        value={movie.premierd}
        onChange={handleChange}
        placeholder="Enter premiere year"
      />
      <button type="submit">Update Movie</button>
    </form>
  );
};

export default EditMovie;
