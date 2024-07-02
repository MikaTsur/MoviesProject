import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SubscribeMovieForm from "./SubscribeMovieForm";
import axios from "axios";
import "../styles/SubscriptionStyles.css";

// Date formatting and validation function
const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Subscription = ({ subscription, onDelete }) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [moviesWatched, setMoviesWatched] = useState(
    subscription.moviesWatched || []
  );

  const handleEdit = () => {
    navigate(`/edit-subscription/${subscription._id}`);
  };

  const fetchUpdatedSubscription = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3011/subscriptions/${subscription._id}`
      );
      const updatedMoviesWatched = response.data.moviesWatched
        .map((movie) => {
          movie.date = formatDate(movie.date);
          return movie;
        })
        .filter((movie) => movie.date !== "Invalid Date");

      setMoviesWatched(updatedMoviesWatched);
    } catch (error) {
      console.error("Failed to fetch updated subscription", error);
    }
  };

  const handleAddMovie = () => {
    fetchUpdatedSubscription();
    setShowForm(false);
  };

  useEffect(() => {
    const validatedMoviesWatched = subscription.moviesWatched
      .map((movie) => {
        movie.date = formatDate(movie.date);
        return movie;
      })
      .filter((movie) => movie.date !== "Invalid Date");

    setMoviesWatched(validatedMoviesWatched);
  }, [subscription]);

  return (
    <div className="rectangle">
      <div className="container">
        <div className="header">Subscription Details</div>
        <div>
          <strong>Full name:</strong> {subscription.fullname}
        </div>
        <div>
          <strong>Email:</strong> {subscription.email}
        </div>
        <div>
          <strong>City:</strong> {subscription.city}
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            className="button"
            onClick={handleEdit}
            style={{ marginRight: "10px" }}
          >
            Edit
          </button>
          <button className="button" onClick={() => onDelete(subscription._id)}>
            Delete
          </button>
        </div>
        <div className="movies-watched-frame">
          <h4>Movies Watched</h4>
          <ul className="movies-list">
            {moviesWatched
              .filter(
                (movie) => movie.movieId && movie.movieId.name !== "Unknown"
              )
              .map((movie) => (
                <li key={movie.movieId ? movie.movieId._id : movie._id}>
                  <Link to={`/movies/${movie.movieId._id}`}>
                    {movie.movieId.name}
                  </Link>
                  , {movie.date}
                </li>
              ))}
          </ul>
          <button className="button" onClick={() => setShowForm(!showForm)}>
            Subscribe to a new movie
          </button>
          {showForm && (
            <SubscribeMovieForm
              subscriptionId={subscription._id}
              onAddMovie={handleAddMovie}
              moviesWatched={moviesWatched} // Pass watched movies to filter
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
