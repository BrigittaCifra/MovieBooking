import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function SearchPage() {
  return <h2>Results for...</h2>;
}

function App() {
  return (
    <div>
      <SearchBar />

      <Routes>
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;