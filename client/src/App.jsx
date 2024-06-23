// C:\Users\morellyo\react_project\ex\client\src\App.jsx

import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie"; // Import your AddMovie component

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Movies - Subscriptions Web Site</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("/movies")}>Movies</button>
        <button onClick={() => navigate("/subscriptions")}>
          Subscriptions
        </button>
        <button onClick={() => navigate("/usersmanagment")}>
          Users Management
        </button>
        <button onClick={() => navigate("/logout")}>Log out</button>
        <br />
        <br />
        <br />
      </div>
      <Routes>
        <Route path="/" element={<h1>E-commerce</h1>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />{" "}
        {/* Define the route for AddMovie */}
      </Routes>
    </>
  );
};

export default App;
