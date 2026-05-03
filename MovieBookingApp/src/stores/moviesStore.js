import { create } from "zustand";
import { getMovies } from "../services/getMovies.js";

const useMoviesStore = create((set, get) => ({
    movies: [],

    // hämtar data från getMovies
    fetchMovies: async () => {
        const data = await getMovies();
        // lägger data i store(movies)
        set({ movies: data });
    },

    // hitta movie utifrån id i movies
    getMovieById: (id) => get().movies.find((m) => m.id === id)
}));

export default useMoviesStore;