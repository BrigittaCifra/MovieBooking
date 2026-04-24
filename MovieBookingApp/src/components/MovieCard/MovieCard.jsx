

// lägg till länk till details när component finns
// logik kring aria-label - add to favorites / remove from favorites

import "./movieCard.css";
import "../../styles/variables.css";
import useFavoritesStore from "../../stores/favoritesStore.js";

export default function MovieCard({ movie }) {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);
    const exists = favorites.some((fav) => fav.id === movie.id);
    
    /*const isFavorite = useFavoritesStore((state) => state.isFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);
    const exists = isFavorite(movie.id);*/ 

    return (
        <div className="movieCard" aria-label={`View details for ${movie.title}`}>
            <button className="favoritesButton" aria-label="Add to favorites" 
            onClick={() => {
                toggleFavorite(movie);
                }}>
                <span className={`material-symbols-outlined ${exists ? "filled" : ""}`}>
    favorite
</span>
            </button>
            <img className="cardImg" src={movie.portraitImg} alt={movie.title} loading="lazy" />
            <div className="cardInfo">
                <p className="cardTitle">{movie.title}</p>
                <div className="containerGenreRated">
                    {movie.genre.length === 1 ? <span>{movie.genre[0]}</span>
                        : <span>{`${movie.genre[0]} · ${movie.genre[1]}`}</span>}
                </div>

            </div>
        </div>
    )
}


