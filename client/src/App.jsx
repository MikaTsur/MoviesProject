import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./pages/Movies";
import Products from "./pages/Products";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Movies - Subscriptions Web Site </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("/movies")}>Movies</button>
        <br />
        <button onClick={() => navigate("/products")}>Products Page</button>
        <br />
        <br />
      </div>
      <Routes>
        <Route path="/" element={<h1>E-commerce</h1>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
