import { useState, useEffect } from "react";
import "./HeroCarousel.css";

function HeroCarousel() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=eng-US&page=1`
        );
        if (!response.ok) throw new Error("Kunde inte hämta filmer");
        const data = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <div className="hero-loading">Laddar filmer...</div>;
  if (error) return <div className="hero-error">{error}</div>;
  if (movies.length === 0) return <div className="hero-error">Inga filmer hittades</div>;

  const movie = movies[currentIndex];

  return (
    <section className="hero">
      <div
        className="hero-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{movie.title}</h1>
            <p className="hero-description">{movie.overview}</p>
            <button className="hero-btn">Boka biljett</button>
          </div>

          <div className="hero-controls">
            <button className="hero-arrow" onClick={handlePrev}>&#8592;</button>
            <div className="hero-dots">
              {movies.map((_, index) => (
                <span
                  key={index}
                  className={`hero-dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="hero-arrow" onClick={handleNext}>&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;