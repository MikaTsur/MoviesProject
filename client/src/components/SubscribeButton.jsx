// C:\Users\morellyo\react_project\ex\client\src\components\SubscribeButton.jsx

import React, { useState } from "react";
import SubscribeMovieForm from "./SubscribeMovieForm";

const SubscribeButton = ({ subscriptionId, onAddMovie, moviesWatched }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowForm(!showForm)}>
        Subscribe to a new movie
      </button>
      {showForm && (
        <SubscribeMovieForm
          subscriptionId={subscriptionId}
          onAddMovie={onAddMovie}
          moviesWatched={moviesWatched}
        />
      )}
    </>
  );
};

export default SubscribeButton;
