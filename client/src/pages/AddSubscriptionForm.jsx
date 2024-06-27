// C:\Users\morellyo\react_project\ex\client\src\pages\AddSubscriptionForm.jsx   ============

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderButtons from "../components/HeaderButtons";
import "./FormStyles.css"; // Import the reusable CSS file

const AddSubscriptionForm = ({ onAddSubscription }) => {
  const [subscriptionName, setSubscriptionName] = useState("");
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [subscriptionCity, setSubscriptionCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!subscriptionName || !subscriptionEmail || !subscriptionCity) {
      setError("All fields are required");
      return;
    }

    const newSubscription = {
      name: subscriptionName,
      email: subscriptionEmail,
      city: subscriptionCity,
    };
    console.log("New Subscription:", newSubscription);

    try {
      const { data } = await axios.post(
        "http://localhost:3011/subscriptions", // Correct the endpoint
        newSubscription
      );
      onAddSubscription(data); // Ensure this function is passed as a prop or handle the state update here
      navigate("/subscriptions"); // Correct the navigate path
    } catch (error) {
      console.error("Error adding subscription:", error);
      setError(
        "Error adding subscription: " +
          (error.response?.data?.error || error.message)
      );
    }
  };

  const handleCancel = () => {
    navigate("/subscriptions"); // Correct the navigate path
  };

  return (
    <>
      <h3>Add Subscription</h3>
      <HeaderButtons />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={subscriptionName}
              onChange={handleInputChange(setSubscriptionName)}
              placeholder="Enter subscription name"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email" // Changed type to email to validate email input
              value={subscriptionEmail}
              onChange={handleInputChange(setSubscriptionEmail)}
              placeholder="Enter email"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input
              type="text"
              value={subscriptionCity}
              onChange={handleInputChange(setSubscriptionCity)}
              placeholder="Enter city"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="button-group">
          <button type="submit" className="button">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSubscriptionForm;
