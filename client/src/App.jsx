// C:\Users\morellyo\react_project\ex\client\src\App.jsx

// src/App.jsx
import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie"; // Make sure this is correctly imported

const App = () => {
  return (
    <>
      <h1>Movies - Subscriptions Web Site</h1>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Movie Database</h1>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
      </Routes>
    </>
  );
};

export default App;
