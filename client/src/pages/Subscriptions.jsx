// C:\Users\morellyo\react_project\ex\client\src\pages\Subscriptions.jsx =================================

import React, { useState, useEffect } from "react";
import axios from "axios";
import SubscriptionsList from "../components/SubscriptionsList";
import Subscription from "../components/Subscription";
import SubscriptionsHeaderButtons from "../components/SubscriptionsHeaderButtons.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doRemoveSubscription } from "../redux/actions";

const SUBSCRIPTION_URL = "http://localhost:3011/subscriptions";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(SUBSCRIPTION_URL);
      setSubscriptions(data);
    } catch (error) {
      console.error("Error fetching Subscriptions:", error);
    }
  };

  const handleFindSubscription = async () => {
    if (!searchTerm.trim()) {
      fetchData();
      return;
    }
    try {
      const { data } = await axios.get(
        `${SUBSCRIPTION_URL}?search=${searchTerm}`
      );
      setSubscriptions(data);
    } catch (error) {
      console.error("Error searching for subscriptions:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteSubscription = async (id) => {
    try {
      await axios.delete(`${SUBSCRIPTION_URL}/${id}`);
      dispatch(doRemoveSubscription(id));
      fetchData();
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

  return (
    <>
      <h3>Subscriptions</h3>
      <SubscriptionsHeaderButtons />
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter subscription name to search"
          value={searchTerm}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleFindSubscription}>Find</button>
      </div>
      <div>
        {subscriptions.map((subscription, index) => (
          <Subscription
            key={index}
            subscription={subscription}
            onDelete={handleDeleteSubscription}
          />
        ))}
      </div>
      <div style={{ clear: "both" }}></div>
      <br />
      <div style={{ width: "50%", float: "left" }}>
        <SubscriptionsList />
      </div>
      <br />
      <br />
    </>
  );
};

export default Subscriptions;
