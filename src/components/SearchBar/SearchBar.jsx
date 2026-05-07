import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import "./SearchBar.css";
import useMoviesStore from "../../stores/moviesStore.js";

function SearchBar() {
  const movies = useMoviesStore((state) => state.movies);
  const fetchMovies = useMoviesStore((state) => state.fetchMovies);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchRef = useRef(null);

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies.length, fetchMovies]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const filteredMovies = movies.filter((movie) =>
      movie.title?.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredMovies);
  }, [query, movies]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setResults([]);
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleMovieClick(movie) {
    setResults([]);
    setQuery("");
    navigate(`/movies/${movie.id}`);
  }

  return (
    <div className="searchbar" ref={searchRef}>
      <input
        type="text"
        placeholder="Search..."
        className="searchbar-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <div className="search-results">
          {results.map((movie) => (
            <button
              key={movie.id}
              type="button"
              className="search-item"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={
                  movie.portraitImg ||
                  "https://via.placeholder.com/50x75?text=No+Image"
                }
                alt={movie.title}
                className="search-item-image"
              />

              <div className="search-item-info">
                <h4>{movie.title}</h4>
                <p>
                  {movie.genre?.length
                    ? movie.genre.join(", ")
                    : "Unknown genre"}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;