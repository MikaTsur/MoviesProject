// C:\Users\morellyo\react_project\ex\client\src\pages\EditSubscription.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditSubscription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState({
    fullname: "",
    email: "",
    city: "",
  });

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3011/subscriptions/${id}`
        );
        setSubscription(response.data);
      } catch (error) {
        console.error("Failed to fetch subscription", error);
        navigate("/subscriptions"); // Redirect if the fetch fails
      }
    };
    fetchSubscription();
  }, [id, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubscription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:3011/subscriptions/${id}`,
        subscription
      );
      navigate("/subscriptions"); // Navigate to subscriptions list on success
    } catch (error) {
      console.error("Failed to update subscription", error);
    }
  };

  if (!subscription) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullname"
        value={subscription.fullname}
        onChange={handleChange}
        placeholder="Enter full name"
      />
      <input
        type="email"
        name="email"
        value={subscription.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="city"
        value={subscription.city}
        onChange={handleChange}
        placeholder="Enter city"
      />
      <button type="submit">Update Subscription</button>
    </form>
  );
};

export default EditSubscription;
