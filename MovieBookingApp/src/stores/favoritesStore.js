import { create } from "zustand";

const useFavoritesStore = create((set, get) => ({
    favorites: [],
        removeFavorite: (id) =>
            set((state) => ({
                favorites: state.favorites.filter((movie) => movie.id !== id),
            })),
            
        isFavorite: (id) =>
            get().favorites.some((fav) => fav.id === id),
        
        toggleFavorite: (movie) =>
            set((state) => {
                const exists = state.favorites.some((f) => f.id === movie.id);
                return {
                    favorites: exists
                    ? state.favorites.filter((f) => f.id !== movie.id)
                    : [...state.favorites, movie]
                };
            }),
}));

export default useFavoritesStore;