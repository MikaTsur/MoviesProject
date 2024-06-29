import React from "react";
import { useNavigate } from "react-router-dom";

const UpperLevelButtons = () => {
  const navigate = useNavigate();

  const navigateToMovies = () => {
    navigate("/movies");
  };

  const navigateToSubscriptions = () => {
    navigate("/subscriptions");
  };

  const navigateToUserManagement = () => {
    navigate("/UserManagement");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button style={{ marginRight: "10px" }} onClick={navigateToMovies}>
        All Movies
      </button>
      <button style={{ marginRight: "10px" }} onClick={navigateToSubscriptions}>
        Subscriptions
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={navigateToUserManagement}
      >
        User Management
      </button>
      <button style={{ marginRight: "10px" }} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UpperLevelButtons;
