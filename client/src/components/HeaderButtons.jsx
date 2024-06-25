// ex\client\src\components\HeaderButtons.jsx   ========================

import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderButtons = () => {
  const navigate = useNavigate();

  const navigateToMovies = () => {
    navigate("/movies");
  };

  const navigateToAddMovie = () => {
    navigate("/add-movie");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button style={{ marginRight: "10px" }} onClick={navigateToMovies}>
        All Movies
      </button>
      <button style={{ marginRight: "10px" }} onClick={navigateToAddMovie}>
        Add Movie
      </button>
    </div>
  );
};

export default HeaderButtons;
