import { Routes, Route } from "react-router";
import { useState } from 'react';
import './App.css';

import MembershipForm from "./components/MembershipForm/MembershipForm";

//Layout
import Layout from './components/Layout/Layout.jsx';

//Pages
import Home from './pages/Home.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Booking from './pages/Booking.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const [showMembershipForm, setShowMembershipForm] = useState(false)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="Booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;