import { create } from "zustand";
import { getMovies } from "../services/getMovies.js";

const useMoviesStore = create((set, get) => ({
    movies: [],
    isLoading: false,
    error: null,

    // hämtar data från getMovies
    fetchMovies: async () => {
        set({ isLoading: true, error: null });
        try {
            const data = await getMovies();
            // lägger data i store(movies)
        
            set({ movies: data, isLoading: false });
        } catch (error) {
            set({ error: "Could not load movies", isLoading: false });
        }
    },

    // hitta movie utifrån id i movies
    getMovieById: (id) => get().movies.find((m) => m.id === id)
}));

export default useMoviesStore;