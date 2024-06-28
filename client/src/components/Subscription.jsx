// C:\Users\morellyo\react_project\ex\client\src\components\Subscription.jsx =======

import React from "react";
import { useNavigate } from "react-router-dom";

const Subscription = ({ subscription, onDelete }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleEdit = () => {
    navigate(`/edit-subscription/${subscription._id}`);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <div>
        <strong>Full name:</strong> {subscription.name}
      </div>
      <div>
        <strong>Email:</strong> {subscription.email}
      </div>
      <div>
        <strong>City:</strong> {subscription.city}
      </div>{" "}
      {/* This closing tag was missing */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleEdit} style={{ marginRight: "10px" }}>
          Edit
        </button>
        <button onClick={() => onDelete(subscription._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Subscription;
