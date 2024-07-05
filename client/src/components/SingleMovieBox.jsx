// C:\Users\morellyo\react_project\ex\client\src\components\SingleMovieBox.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/SubscriptionStyles.css";

const SingleMovieBox = ({ movie, onDelete, isDetailPage = false }) => {
  const [subscribers, setSubscribers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3011/subscriptions`);
        const movieSubscribers = data.filter((subscription) =>
          subscription.moviesWatched.some(
            (m) => m.movieId && m.movieId._id === movie._id
          )
        );
        setSubscribers(movieSubscribers);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };
    fetchSubscribers();
  }, [movie._id]);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/100x150";
  };

  const handleEdit = () => {
    navigate(`/edit-movie/${movie._id}`);
  };

  const handleDelete = async () => {
    if (onDelete) {
      await onDelete(movie._id);
      // Refetch subscribers to reflect changes
      const { data } = await axios.get(`http://localhost:3011/subscriptions`);
      const movieSubscribers = data.filter((subscription) =>
        subscription.moviesWatched.some(
          (m) => m.movieId && m.movieId._id === movie._id
        )
      );
      setSubscribers(movieSubscribers);
    }
  };

  return (
    <div className="rectangle">
      <div className="container">
        <div className="header">Movie Details</div>
        <div>
          <strong>Name:</strong> {movie.name}
        </div>
        <div>
          <strong>Year:</strong> {movie.premierd}
        </div>
        <div>
          <strong>Genres:</strong>{" "}
          {Array.isArray(movie.genres) ? movie.genres.join(", ") : movie.genres}
        </div>
        <div>
          <img
            src={movie.image}
            alt={movie.name}
            onError={handleImageError}
            style={{ width: "100px", height: "150px" }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            className="button"
            onClick={handleEdit}
            style={{ marginRight: "10px" }}
          >
            Edit
          </button>
          {!isDetailPage && (
            <button className="button" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
        <div className="movies-watched-frame">
          <h4>Subscribers</h4>
          <ul className="movies-list">
            {subscribers.map((sub) => {
              const movieWatched = sub.moviesWatched.find(
                (m) => m.movieId && m.movieId._id === movie._id
              );
              if (!movieWatched || movieWatched.movieId.name === "Unknown") {
                return null;
              }
              return (
                <li key={sub._id}>
                  <Link to={`/subscriptions/${sub._id}`}>{sub.fullname}</Link>,{" "}
                  {movieWatched.date}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieBox;
