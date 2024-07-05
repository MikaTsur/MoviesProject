// C:\Users\morellyo\react_project\ex\client\src\pages\MovieDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleMovieBox from "../components/SingleMovieBox";
import "../styles/SubscriptionStyles.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3011/movies/${id}`);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found.</div>;

  return <SingleMovieBox movie={movie} isDetailPage />;
};

export default MovieDetail;
