import { create } from "zustand";

const useFavoritesStore = create((set, get) => ({
    favorites: [],
    /* ta bort om ej används
        removeFavorite: (id) =>
            set((state) => ({
                favorites: state.favorites.filter((movie) => movie.id !== id),
            })),
*/ 

        clearFavorites: () => set({ favorites: [] }),

        isFavorite: (id) =>
            get().favorites.some((fav) => fav.id === id),
        
        toggleFavorite: (movie) =>
            set((state) => {
                console.log("toggleFavorite called", movie.id);
                const exists = state.favorites.some((f) => f.id === movie.id);
                return {
                    favorites: exists
                    ? state.favorites.filter((f) => f.id !== movie.id)
                    : [...state.favorites, movie]
                };
            }),
}));

export default useFavoritesStore;