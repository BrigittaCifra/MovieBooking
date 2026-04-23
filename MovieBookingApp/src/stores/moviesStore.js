import { create } from "zustand";
import { getMovies } from "../services/getMovies.js";

const useMoviesStore = create((set, get) => ({
    movies: [],

    fetchMovies: async () => {
        const data = await getMovies();
        set({ movies: data });
    },

    getMovieById: (id) => get().movies.find((m) => m.id === id)
}));

export default useMoviesStore;