// import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import HeaderButtons from "./components/HeaderButtons";
import UpperLevelButtons from "./components/UpperLevelButtons";
import Subscriptions from "./pages/Subscriptions";
import AddSubscriptionForm from "./pages/AddSubscriptionForm";

const App = () => {
  return (
    <>
      <UpperLevelButtons />
      <h1>Movies - Subscriptions Web Site</h1>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Movie Database</h1>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/add-subscription" element={<AddSubscriptionForm />} />
      </Routes>
    </>
  );
};

export default App;
