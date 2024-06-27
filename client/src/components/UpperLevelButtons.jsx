//C:\Users\morellyo\react_project\ex\client\src\components\UpperLevelButtons.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const UpperLevelButtons = () => {
  const navigate = useNavigate();

  const navigateToMovies = () => {
    navigate("/movies");
  };

  const navigateToSubscrptions = () => {
    navigate("/subscrptions");
  };

  const navigateToUserManagement = () => {
    navigate("/UserManagement");
  };

  const navigateToLogOut = () => {
    navigate("/LogOut");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button style={{ marginRight: "10px" }} onClick={navigateToMovies}>
        All Movies
      </button>
      <button style={{ marginRight: "10px" }} onClick={navigateToSubscrptions}>
        Subscrptions
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={navigateToUserManagement}
      >
        User Management
      </button>
      <button style={{ marginRight: "10px" }} onClick={navigateToLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UpperLevelButtons;
