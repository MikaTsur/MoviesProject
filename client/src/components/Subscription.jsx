// C:\Users\morellyo\react_project\ex\client\src\components\Subscription.jsx

import React from "react";
import SingleSubscriberBox from "./SingleSubscriberBox";

const Subscription = ({ subscription, onDelete }) => {
  const handleAddMovie = (updatedSubscription) => {
    console.log("Movie added:", updatedSubscription);
  };

  return (
    <SingleSubscriberBox
      subscriber={subscription}
      onDelete={onDelete}
      onAddMovie={handleAddMovie}
    />
  );
};

export default Subscription;
