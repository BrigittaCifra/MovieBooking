
// Stores
import useFavoritesStore from "../stores/favoritesStore.js";
import useMoviesStore from "../stores/moviesStore.js";

// Components
import MovieCard from '../components/MovieCard/MovieCard.jsx';
import Loading from '../components/Loading/Loading.jsx';
import './pages.css';
import '../components/Button/Button.css';

function Favorites() {
    const favoriteMovies = useFavoritesStore((state) => state.favorites);
    const clearFavorites = useFavoritesStore((state) => state.clearFavorites);
    const isLoading = useMoviesStore(state => state.isLoading);
    
    if (isLoading) return <Loading />

    return (
        <div>
            <div className="favorites-grid">
                {favoriteMovies.length === 0
                    ? <p>Nothing saved!</p>
                    : favoriteMovies.map((favoriteMovie) => (
                        <MovieCard
                            key={favoriteMovie.id}
                            movie={favoriteMovie}
                        />
                    ))
                }
            </div>
            {favoriteMovies.length > 0 && (
                <button className="btn secondary removeBtn" onClick={clearFavorites}>Remove all</button>
            )}

        </div>
    )
}

export default Favorites;