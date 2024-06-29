// C:\Users\morellyo\react_project\ex\client\src\pages\AddSubscriptionForm.jsx ==============
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderButtons from "../components/HeaderButtons";
import "./FormStyles.css"; // Import the reusable CSS file
import SubscriptionsHeaderButtons from "../components/SubscriptionsHeaderButtons";

const AddSubscriptionForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!fullname || !email || !city) {
      setError("All fields are required");
      return;
    }

    const newSubscription = {
      fullname,
      email,
      city,
    };
    console.log("New Subscription:", newSubscription);

    try {
      const { data } = await axios.post(
        "http://localhost:3011/subscriptions",
        newSubscription
      );
      console.log("Subscription added:", data);
      navigate("/subscriptions"); // Redirect to subscriptions list on success
    } catch (error) {
      console.error("Error adding subscription:", error);
      setError(
        "Error adding subscription: " +
          (error.response?.data?.error || error.message)
      );
    }
  };

  const handleCancel = () => {
    navigate("/subscriptions"); // Redirect to subscriptions list on cancel
  };

  return (
    <>
      <h3>Add Subscription</h3>
      <SubscriptionsHeaderButtons />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Full Name:
            <input
              type="text"
              value={fullname}
              onChange={handleInputChange(setFullname)}
              placeholder="Enter full name"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleInputChange(setEmail)}
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
              value={city}
              onChange={handleInputChange(setCity)}
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
