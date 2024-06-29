// C:\Users\morellyo\react_project\ex\client\src\components\SubscribeMovieForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const SubscribeMovieForm = ({ subscriptionId, onAddMovie }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3011/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedMovieId || !date) {
      alert("Please select a movie and enter a date.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3011/subscriptions/${subscriptionId}/add-movie`,
        { movieId: selectedMovieId, date }
      );
      onAddMovie(response.data);
    } catch (error) {
      console.error("Error subscribing to movie:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Movie:
          <select
            value={selectedMovieId}
            onChange={(e) => setSelectedMovieId(e.target.value)}
          >
            <option value="">Select a movie</option>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="dd/mm/yyyy"
          />
        </label>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeMovieForm;
