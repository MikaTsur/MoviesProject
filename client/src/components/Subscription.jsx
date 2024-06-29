// C:\Users\morellyo\react_project\ex\client\src\components\Subscription.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscribeMovieForm from "./SubscribeMovieForm";

const Subscription = ({ subscription, onDelete }) => {
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
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
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
        <button onClick={handleEdit} style={{ marginRight: "10px" }}>
          Edit
        </button>
        <button onClick={() => onDelete(subscription._id)}>Delete</button>
      </div>
      <div>
        <h4>Movies Watched</h4>
        <ul>
          {moviesWatched.map((movie) => (
            <li key={movie.movieId._id}>
              {movie.movieId.name} , {movie.date}
            </li>
          ))}
        </ul>
        <button onClick={() => setShowForm(!showForm)}>
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
  );
};

export default Subscription;
