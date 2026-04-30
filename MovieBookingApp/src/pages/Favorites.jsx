import MovieCard from '../components/MovieCard/MovieCard.jsx';
import useFavoritesStore from "../stores/favoritesStore";
import './pages.css';

export default function Favorites() {
    const favoriteMovies = useFavoritesStore((state) => state.favorites);
    const clearFavorites = useFavoritesStore((state) => state.clearFavorites);
    return (
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
            favoriteMovies.length === 0 && (
                <button onClick={clearFavorites}>Remove all</button>
            )
           
        </div>
    )
}