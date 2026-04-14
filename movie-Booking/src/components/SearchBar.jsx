import { useState } from "react";
import { useNavigate } from "react-router-dom"; // används för att skicka användaren till sökresultatsidan
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();            // för att kunna byta sida

  const handleSubmit = (e) => {              // När användaren klickar på sök-knappen eller trycker enter
    e.preventDefault();                     // Stoppar sidan från att ladda om

    const trimmedQuery = query.trim();      // Tar bort onödiga mellanslag i början och slutet av sökfrågan

    if (!trimmedQuery) return;

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);   // tar dig till söksidan
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        placeholder="Search..."
         className="searchbar-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="searchbar-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;