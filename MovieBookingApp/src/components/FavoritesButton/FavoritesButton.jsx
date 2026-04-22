import useFavoritesStore from "../../stores/favoritesStore.js";

export default function FavoritesButton() {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const isFavorite = useFavoritesStore((state) => state.isFavorite);
    const exists = isFavorite(movie.id);


    return (
        <>
        <button onClick={() => toggleFavorite(movie)}>
            {exists ? "♥" : "♡"}
        </button>
</>
    )
}