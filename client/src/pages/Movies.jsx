import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import HeaderButtons from "../components/HeaderButtons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doRemoveMovie } from "../redux/actions";
import "../styles/SubscriptionStyles.css";

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
      fetchData();
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
        <button className="button" onClick={handleFindMovie}>
          Find
        </button>
      </div>
      <div>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} onDelete={handleDeleteMovie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
