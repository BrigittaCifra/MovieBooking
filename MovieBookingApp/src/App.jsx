import { Routes, Route } from "react-router";
import { useState } from 'react';
import './App.css';

//Layout
import Layout from './components/Layout/Layout.jsx';

//Pages
import Home from './pages/Home.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Booking from './pages/Booking.jsx';
import Favorites from './pages/Favorites.jsx';
import AllMovies from './pages/AllMovies.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="Booking" element={<Booking />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;