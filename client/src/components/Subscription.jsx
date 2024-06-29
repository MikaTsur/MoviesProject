import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubscribeMovieForm from "./SubscribeMovieForm";
import axios from "axios";
import "../styles/SubscriptionStyles.css";

const Subscription = ({ subscription, onDelete, onAddMovie }) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [moviesWatched, setMoviesWatched] = useState(
    subscription.moviesWatched || []
  );

  const handleEdit = () => {
    navigate(`/edit-subscription/${subscription._id}`);
  };

  const handleAddMovie = (updatedSubscription) => {
    setMoviesWatched(updatedSubscription.moviesWatched);
    setShowForm(false);
    onAddMovie(updatedSubscription); // Ensure the parent state is updated
  };

  useEffect(() => {
    setMoviesWatched(subscription.moviesWatched);
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
        <div>
          <h4>Movies Watched</h4>
          <ul className="movies-list">
            {moviesWatched.map((movie) => (
              <li key={movie.movieId._id}>
                {movie.movieId.name} , {movie.date}
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
