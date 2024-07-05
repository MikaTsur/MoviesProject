//C:\Users\morellyo\react_project\ex\client\src\pages\Subscriber.jsx ===

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SubscribeMovieForm from "../components/SubscribeMovieForm";
import "../styles/SubscriptionStyles.css";
import SubscriptionsHeaderButtons from "../components/SubscriptionsHeaderButtons";
import SubscribeButton from "../components/SubscribeButton";

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

const Subscriber = () => {
  const { id } = useParams();
  const [subscriber, setSubscriber] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriber = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3011/subscriptions/${id}`
        );
        setSubscriber(data);
      } catch (error) {
        console.error("Error fetching subscriber:", error);
      }
    };
    fetchSubscriber();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3011/subscriptions/${id}`);
      navigate("/subscriptions");
    } catch (error) {
      console.error("Error deleting subscriber:", error);
    }
  };

  const handleAddMovie = (updatedSubscriber) => {
    setSubscriber(updatedSubscriber);
    setShowForm(false);
  };

  if (!subscriber) return <div>Loading...</div>;

  return (
    <div>
      <SubscriptionsHeaderButtons />
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
              onClick={() => navigate(`/edit-subscription/${subscriber._id}`)}
              style={{ marginRight: "10px" }}
            >
              Edit
            </button>
            <button className="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="movies-watched-frame">
            <h4>Movies Watched</h4>
            <ul className="movies-list">
              {subscriber.moviesWatched.map((movie) => (
                <li key={movie.movieId ? movie.movieId._id : movie._id}>
                  {movie.movieId ? movie.movieId.name : "Unknown"},{" "}
                  {formatDate(movie.date)}
                </li>
              ))}
            </ul>
            <SubscribeButton
              subscriptionId={subscriber._id}
              onAddMovie={handleAddMovie}
              moviesWatched={subscriber.moviesWatched}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
