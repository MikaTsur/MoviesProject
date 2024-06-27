// C:\Users\morellyo\react_project\ex\client\src\components\SubscriptionsHeaderButtons.jsx   ========================

import React from "react";
import { useNavigate } from "react-router-dom";

const SubscriptionsHeaderButtons = () => {
  const navigate = useNavigate();

  const navigateToAllMembers = () => {
    navigate("/all-members");
  };

  const navigateToAddMember = () => {
    navigate("/add-members");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button style={{ marginRight: "10px" }} onClick={navigateToAllMembers}>
        All Members
      </button>
      <button style={{ marginRight: "10px" }} onClick={navigateToAddMember}>
        Add Member
      </button>
    </div>
  );
};

export default SubscriptionsHeaderButtons;
