import { useState, useEffect, useRef } from "react";
import "./SearchBar.css";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

if (!TMDB_API_KEY) {
  console.warn("TMDB API key is missing. Check your .env file.");
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (!TMDB_API_KEY) return;

    async function fetchGenres() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch genres");
        }

        const data = await response.json();

        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });

        setGenres(genreMap);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    fetchGenres();
  }, []);

  useEffect(() => {
    if (!TMDB_API_KEY) return;

    async function fetchMovies() {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      try {
        const tmdbResponse = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${TMDB_API_KEY}`
        );

        if (!tmdbResponse.ok) {
          throw new Error("Failed to fetch movies");
        }

        const tmdbData = await tmdbResponse.json();
        setResults(tmdbData.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }

    fetchMovies();
  }, [query]);

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

  async function handleMovieClick(movie) {
    if (!TMDB_API_KEY) return;

    setSelectedMovie(movie);
    setMovieDetails(null);
    setLoadingDetails(true);
    setResults([]);

    try {
      const [detailsRes, releaseRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}`),
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/release_dates?api_key=${TMDB_API_KEY}`)
      ]);

      if (!detailsRes.ok) {
        throw new Error("Failed to fetch movie details");
      }

      if (!releaseRes.ok) {
        throw new Error("Failed to fetch release dates");
      }

      const detailsData = await detailsRes.json();
      const releaseData = await releaseRes.json();

      const usRelease = releaseData.results?.find(
        (item) => item.iso_3166_1 === "US"
      );

      const certification =
        usRelease?.release_dates?.find((r) => r.certification)?.certification || "N/A";

      setMovieDetails({
        ...detailsData,
        certification,
      });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoadingDetails(false);
    }
  }

  function closeModal() {
    setSelectedMovie(null);
    setMovieDetails(null);
    setLoadingDetails(false);
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
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                    : "https://via.placeholder.com/50x75?text=No+Image"
                }
                alt={movie.title}
                className="search-item-image"
              />

              <div className="search-item-info">
                <h4>{movie.title}</h4>
                <p>
                  {movie.genre_ids
                    ?.map((id) => genres[id])
                    .filter(Boolean)
                    .join(", ") || "Unknown genre"}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedMovie && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <h2 className="modal-title">
              {movieDetails?.title || selectedMovie.title}
            </h2>

            <img
              src={
                movieDetails?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`
                  : movieDetails?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                  : "https://via.placeholder.com/500x280"
              }
              alt={movieDetails?.title || selectedMovie.title}
              className="modal-image"
            />

            {loadingDetails ? (
              <p>Loading movie details...</p>
            ) : (
              <>
                <div className="movie-details">
                  <p>
                    <strong>Length:</strong>{" "}
                    {movieDetails?.runtime ? `${movieDetails.runtime} min` : "N/A"}
                  </p>

                  <p>
                    <strong>Category:</strong>{" "}
                    {movieDetails?.genres?.length
                      ? movieDetails.genres.map((genre) => genre.name).join(", ")
                      : "N/A"}
                  </p>

                  <p>
                    <strong>Age rating:</strong>{" "}
                    {movieDetails?.certification || "N/A"}
                  </p>

                  <p>
                    <strong>Rating:</strong>{" "}
                    {movieDetails?.vote_average
                      ? `${movieDetails.vote_average}/10`
                      : "N/A"}
                  </p>

                  <p>
                    <strong>Release date:</strong>{" "}
                    {movieDetails?.release_date || "N/A"}
                  </p>
                </div>

                <div className="movie-overview">
                  <h3>Overview</h3>
                  <p>{movieDetails?.overview || "No description available"}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;