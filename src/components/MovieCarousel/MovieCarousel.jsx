import { useState } from "react";
import { useNavigate } from "react-router";
import useFavoritesStore from "../../stores/favoritesStore.js";
import "./MovieCarousel.css";

function MovieCarousel({ movies, title }) {
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();

    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);

    const visibleCount = 4;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + 1, movies.length - visibleCount)
        );
    };

    if (!movies || movies.length === 0) return null;

    return (
        <section className="movie-carousel">
            <div className="carousel-header">
                <h2 className="carousel-title">{title}</h2>

                <button
                    className="carousel-see-all"
                    onClick={() => navigate("/movies")}
                >
                    See All →
                </button>
            </div>

            <div className="carousel-track">
                <button
                    className="carousel-arrow left"
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                >
                    &#8592;
                </button>

                <div className="carousel-cards">
                    {movies.slice(startIndex, startIndex + visibleCount).map((movie) => {
                        const exists = favorites.some(
                            (fav) => fav.id === movie.id
                        );

                        return (
                            <div
                                key={movie.id}
                                className="carousel-card"
                                onClick={() => navigate(`/movies/${movie.id}`)}
                            >
                                <button
                                    className="favoritesButton"
                                    aria-label={
                                        exists
                                            ? "Remove from favorites"
                                            : "Add to favorites"
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(movie);
                                    }}
                                >
                                    <span
                                        className={`material-symbols-outlined ${exists ? "filled" : ""
                                            }`}
                                    >
                                        favorite
                                    </span>
                                </button>

                                <div className="card-img-wrapper">
                                    <img
                                        src={movie.portraitImg}
                                        alt={movie.title}
                                        className="card-img"
                                    />
                                </div>

                                <div className="card-info">
                                    <h3 className="card-title">
                                        {movie.title}
                                    </h3>

                                    <div className="card-meta">
                                        <span>{movie.runtime}</span>
                                        <span>{movie.rated}</span>
                                    </div>

                                    <div className="card-showtimes">
                                        {movie.showtimes?.[0]?.times?.map(
                                            (time, i) => (
                                                <span
                                                    key={i}
                                                    className="showtime-badge"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(
                                                            `/booking/${movie.id}`
                                                        );
                                                    }}
                                                >
                                                    {time}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="carousel-arrow right"
                    onClick={handleNext}
                    disabled={
                        startIndex >= movies.length - visibleCount
                    }
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

export default MovieCarousel;



/** 
function MovieCarousel({ movies, title }) {
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();

    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);

    const visibleCount = 4;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + 1, movies.length - visibleCount)
        );
    };

    const visibleMovies = movies.slice(startIndex, startIndex + visibleCount);

    if (!movies || movies.length === 0) return null;

    return (
        <section className="movie-carousel">
            <div className="carousel-header">
                <h2 className="carousel-title">{title}</h2>

                <button
                    className="carousel-see-all"
                    onClick={() => navigate("/movies")}
                >
                    Se alla →
                </button>
            </div>

            <div className="carousel-track">
                <button
                    className="carousel-arrow left"
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                >
                    &#8592;
                </button>

                <div className="carousel-cards">
                    {visibleMovies.map((movie) => {
                        const exists = favorites.some(
                            (fav) => fav.id === movie.id
                        );

                        return (
                            <div
                                key={movie.id}
                                className="carousel-card"
                                onClick={() => navigate(`/movies/${movie.id}`)}
                            >
                                <button
                                    className="favoritesButton"
                                    aria-label={
                                        exists
                                            ? "Remove from favorites"
                                            : "Add to favorites"
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(movie);
                                    }}
                                >
                                    <span
                                        className={`material-symbols-outlined ${
                                            exists ? "filled" : ""
                                        }`}
                                    >
                                        favorite
                                    </span>
                                </button>

                                <div className="card-img-wrapper">
                                    <img
                                        src={movie.portraitImg}
                                        alt={movie.title}
                                        className="card-img"
                                    />
                                </div>

                                <div className="card-info">
                                    <h3 className="card-title">
                                        {movie.title}
                                    </h3>

                                    <div className="card-meta">
                                        <span>{movie.runtime}</span>
                                        <span>{movie.age}</span>
                                    </div>

                                    <div className="card-showtimes">
                                        {movie.showtimes?.[0]?.times?.map(
                                            (time, i) => (
                                                <span
                                                    key={i}
                                                    className="showtime-badge"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(
                                                            `/booking/${movie.id}`
                                                        );
                                                    }}
                                                >
                                                    {time}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="carousel-arrow right"
                    onClick={handleNext}
                    disabled={
                        startIndex >= movies.length - visibleCount
                    }
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

export default MovieCarousel;*/

