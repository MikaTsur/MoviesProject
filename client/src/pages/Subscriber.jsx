// C:\Users\morellyo\react_project\ex\client\src\pages\Subscriber.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SubscriptionsHeaderButtons from "../components/SubscriptionsHeaderButtons";
import SingleSubscriberBox from "../components/SingleSubscriberBox";
import "../styles/SubscriptionStyles.css";

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
      <SingleSubscriberBox
        subscriber={subscriber}
        onDelete={handleDelete}
        onAddMovie={handleAddMovie}
      />
    </div>
  );
};

export default Subscriber;
