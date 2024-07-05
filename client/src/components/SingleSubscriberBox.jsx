// C:\Users\morellyo\react_project\ex\client\src\components\SingleSubscriberBox.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import SubscribeButton from "../components/SubscribeButton";
import "../styles/SubscriptionStyles.css";

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

const SingleSubscriberBox = ({ subscriber, onDelete, onAddMovie }) => {
  const navigate = useNavigate();
  const [moviesWatched, setMoviesWatched] = useState(
    subscriber.moviesWatched || []
  );

  const handleEdit = () => {
    navigate(`/edit-subscription/${subscriber._id}`);
  };

  const fetchUpdatedSubscription = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3011/subscriptions/${subscriber._id}`
      );
      const updatedMoviesWatched = response.data.moviesWatched
        .map((movie) => {
          movie.date = formatDate(movie.date);
          return movie;
        })
        .filter((movie) => movie.date !== "Invalid Date");

      setMoviesWatched(updatedMoviesWatched);
      onAddMovie(response.data);
    } catch (error) {
      console.error("Failed to fetch updated subscription", error);
    }
  };

  const handleAddMovie = () => {
    fetchUpdatedSubscription();
  };

  useEffect(() => {
    const validatedMoviesWatched = subscriber.moviesWatched
      .map((movie) => {
        movie.date = formatDate(movie.date);
        return movie;
      })
      .filter((movie) => movie.date !== "Invalid Date");

    setMoviesWatched(validatedMoviesWatched);
  }, [subscriber]);

  return (
    <div className="rectangle">
      <div className="container">
        <div className="header">Subscriber Details</div>
        <div>
          <strong>Full name:</strong> {subscriber.fullname}
        </div>
        <div>
          <strong>Email:</strong> {subscriber.email}
        </div>
        <div>
          <strong>City:</strong> {subscriber.city}
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            className="button"
            onClick={handleEdit}
            style={{ marginRight: "10px" }}
          >
            Edit
          </button>
          <button className="button" onClick={() => onDelete(subscriber._id)}>
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
          <SubscribeButton
            subscriptionId={subscriber._id}
            onAddMovie={handleAddMovie}
            moviesWatched={moviesWatched}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleSubscriberBox;
