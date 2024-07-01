import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SubscriptionStyles.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3011/movies/${id}`);
        console.log("Fetched movie data:", data);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchSubscriptions = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3011/subscriptions`);
        const movieSubscriptions = data.filter((subscription) =>
          subscription.moviesWatched.some(
            (m) => m.movieId && m.movieId._id === id
          )
        );
        setSubscriptions(movieSubscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchMovie();
    fetchSubscriptions();
  }, [id]);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/100x150";
  };

  const handleEdit = () => {
    navigate(`/edit-movie/${movie._id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found.</div>;

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
          <button className="button" onClick={() => navigate("/movies")}>
            Back to Movies
          </button>
        </div>
        <div className="movies-watched-frame">
          <h4>Subscribers</h4>
          <ul className="movies-list">
            {subscriptions.map((sub) => {
              const movieWatched = sub.moviesWatched.find(
                (m) => m.movieId && m.movieId._id === movie._id
              );
              return (
                <li key={sub._id}>
                  {sub.fullname}, {movieWatched ? movieWatched.date : "N/A"}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
