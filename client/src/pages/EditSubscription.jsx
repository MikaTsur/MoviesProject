import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderButtons from "../components/HeaderButtons";
import "./FormStyles.css"; // Import the reusable CSS file

const EditSubscription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState({
    fullname: "",
    email: "",
    city: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3011/subscriptions/${id}`
        );
        setSubscription({ ...response.data });
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
    if (!subscription.fullname || !subscription.email || !subscription.city) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.put(
        `http://localhost:3011/subscriptions/${id}`,
        subscription
      );
      navigate("/subscriptions");
    } catch (error) {
      console.error("Failed to update subscription", error);
      setError("Failed to update subscription");
    }
  };

  const handleCancel = () => {
    navigate("/subscriptions");
  };

  if (!subscription) return <p>Loading...</p>;

  return (
    <>
      <h3>Edit Subscription</h3>
      <HeaderButtons />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Full Name:
            <input
              type="text"
              name="fullname"
              value={subscription.fullname}
              onChange={handleChange}
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
              name="email"
              value={subscription.email}
              onChange={handleChange}
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
              name="city"
              value={subscription.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
              className="input-field"
            />
          </label>
        </div>
        <div className="button-group">
          <button type="submit" className="button">
            Update Subscription
          </button>
          <button type="button" onClick={handleCancel} className="button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditSubscription;
