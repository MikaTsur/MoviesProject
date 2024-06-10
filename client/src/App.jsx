import { Routes, Route, Link } from "react-router-dom";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <h1>Movies - Subscriptions Web </h1>
      <Link to="/customers">Customers Page</Link> <br />
      <Link to="/products">Products Page</Link> <br />
      <br />
      <Routes>
        <Route path="/" element={<h1>E-commerce</h1>} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
