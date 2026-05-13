import { useEffect } from "react";
import useMoviesStore from '../stores/moviesStore.js';

// Components
import MovieCard from '../components/MovieCard/MovieCard.jsx';
import Loading from '../components/Loading/Loading.jsx';


function AllMovies() {
    const movies = useMoviesStore((state) => state.movies);
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const isLoading = useMoviesStore(state => state.isLoading);

    useEffect(() => {
        // fallback ifall filmerna inte hämtats i home page först
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="allMoviesWrapper container">
            <h2>All Movies</h2>
            <div className="movies-grid">

                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default AllMovies;