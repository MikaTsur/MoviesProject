import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SubscriptionStyles.css";

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
      console.log("Movie added response:", response.data); // Detailed log
      onAddMovie(response.data); // Call onAddMovie with the updated subscription data
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container rectangle">
      <div className="form-group">
        <label>
          Movie:
          <select
            value={selectedMovieId}
            onChange={(e) => setSelectedMovieId(e.target.value)}
            className="input-field"
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
      <div className="form-group">
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="dd/mm/yyyy"
            className="input-field"
          />
        </label>
      </div>
      <div className="button-group">
        <button type="submit" className="button">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default SubscribeMovieForm;
