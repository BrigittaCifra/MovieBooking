import MovieCard from '../components/MovieCard/MovieCard.jsx';
import useFavoritesStore from "../stores/favoritesStore.js";
import './pages.css';
import '../components/Button/Button.css';

export default function Favorites() {
    const favoriteMovies = useFavoritesStore((state) => state.favorites);
    const clearFavorites = useFavoritesStore((state) => state.clearFavorites);
    console.log("favoriteMovies", favoriteMovies);
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
            {favoriteMovies.length > 0 && (
                <button className="btn secondary removeBtn" onClick={clearFavorites}>Remove all</button>
            )}
           
        </div>
    )
}