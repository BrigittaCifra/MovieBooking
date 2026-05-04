import { useEffect } from "react";

import MovieCard from '../components/MovieCard/MovieCard.jsx';
import useMoviesStore from '../stores/moviesStore.js';

function AllMovies() {
    const movies = useMoviesStore((state) => state.movies);
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);

      useEffect(() => {
            // fallback ifall filmerna inte hämtats i home page först
            if (movies.length === 0) {
                fetchMovies();
            }
        }, []);
    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default AllMovies;