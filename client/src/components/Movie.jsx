import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Movie = ({ movie, onDelete }) => {
  const [subscribers, setSubscribers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3011/subscriptions`);
        const movieSubscribers = data.filter((subscription) =>
          subscription.moviesWatched.some((m) => m.movieId._id === movie._id)
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

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
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
        <button onClick={handleEdit} style={{ marginRight: "10px" }}>
          Edit
        </button>
        <button onClick={() => onDelete(movie._id)}>Delete</button>
      </div>
      <div>
        <strong>Subscribers:</strong>
        <ul>
          {subscribers.map((sub) => {
            const movieWatched = sub.moviesWatched.find(
              (m) => m.movieId._id === movie._id
            );
            return (
              <li key={sub._id}>
                {sub.fullname}, {movieWatched.date}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
