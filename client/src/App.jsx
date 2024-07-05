import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import HeaderButtons from "./components/HeaderButtons";
import UpperLevelButtons from "./components/UpperLevelButtons";
import Subscriptions from "./pages/Subscriptions";
import AddSubscriptionForm from "./pages/AddSubscriptionForm";
import EditSubscription from "./pages/EditSubscription";
import Subscriber from "./pages/Subscriber"; // Import Subscriber component
import MovieDetail from "./pages/MovieDetail"; // Import MovieDetail component
import LoginPage from "./pages/LoginPage";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <UpperLevelButtons />}
      <h1>Movies - Subscriptions Web Site</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movies" element={<PrivateRoute element={<Movies />} />} />
        <Route
          path="/add-movie"
          element={<PrivateRoute element={<AddMovie />} />}
        />
        <Route
          path="/edit-movie/:id"
          element={<PrivateRoute element={<EditMovie />} />}
        />
        <Route
          path="/subscriptions"
          element={<PrivateRoute element={<Subscriptions />} />}
        />
        <Route
          path="/add-subscription"
          element={<PrivateRoute element={<AddSubscriptionForm />} />}
        />
        <Route
          path="/edit-subscription/:id"
          element={<PrivateRoute element={<EditSubscription />} />}
        />
        <Route
          path="/subscriptions/:id"
          element={<PrivateRoute element={<Subscriber />} />}
        />
        <Route
          path="/movies/:id"
          element={<PrivateRoute element={<MovieDetail />} />}
        />{" "}
        {/* Added this line */}
      </Routes>
    </>
  );
};

export default App;
