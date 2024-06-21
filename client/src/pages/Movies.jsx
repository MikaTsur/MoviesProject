// ex\client\src\pages\Movies.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList";
import Movie from "../components/Movie";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MOVIE_URL = "http://localhost:3011/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run once on mount

  const fetchData = async () => {
    const { data } = await axios.get(MOVIE_URL);
    setMovies(data);
  };

  const handleFindMovie = async () => {
    if (!searchTerm.trim()) {
      fetchData(); // If search term is empty, fetch all movies
      return;
    }
    try {
      const { data } = await axios.get(`${MOVIE_URL}?search=${searchTerm}`);
      setMovies(data);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigateToAddMovie = () => {
    navigate("/add-movie"); // Navigate to the Add Movie page
  };

  return (
    <>
      <h3>Movies</h3>
      <div style={{ marginBottom: "10px" }}>
        <button style={{ marginRight: "10px" }} onClick={fetchData}>
          All Movies
        </button>
        <button style={{ marginRight: "10px" }} onClick={navigateToAddMovie}>
          Add Movie
        </button>
        <input
          type="text"
          placeholder="Enter movie name to search"
          value={searchTerm}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleFindMovie}>Find</button>
      </div>
      <div>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
      <div style={{ clear: "both" }}></div>
      <br />
      <div style={{ width: "50%", float: "left" }}>
        <MoviesList />
      </div>
      <br />
      <br />
    </>
  );
};

export default Movies;
