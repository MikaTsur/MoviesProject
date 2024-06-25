// // ex\client\src\pages\Movies.jsx =================================// ex\client\src\pages\Movies.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList";
import Movie from "../components/Movie"; // Make sure this import is correct
import HeaderButtons from "../components/HeaderButtons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doRemoveMovie } from "../redux/actions";

const MOVIE_URL = "http://localhost:3011/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(MOVIE_URL);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleFindMovie = async () => {
    if (!searchTerm.trim()) {
      fetchData();
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

  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`${MOVIE_URL}/${id}`);
      dispatch(doRemoveMovie(id));
      fetchData(); // Refresh the list of movies
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <>
      <h3>Movies</h3>
      <HeaderButtons />
      <div style={{ marginBottom: "10px" }}>
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
          <Movie key={index} movie={movie} onDelete={handleDeleteMovie} />
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
