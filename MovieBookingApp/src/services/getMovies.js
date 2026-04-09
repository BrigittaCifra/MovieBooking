// imports mockdata
import { titleData, showtimesData } from "./mockData.js";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
if (!TMDB_API_KEY || !OMDB_API_KEY) {
    console.warn("Missing API Key");
}

export async function getMovie(movie) {
    try {
        const omdbResponse = await fetch(`https://www.omdbapi.com/?t=${movie.title}&apikey=${OMDB_API_KEY}`);
        const omdbData = await omdbResponse.json();

        const tmdbResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie.title}&api_key=${TMDB_API_KEY}`);
        const tmdbData = await tmdbResponse.json();

        // TMDB lämnar en array av resultat, följande hämtar första resultatet

        // portrait till cards & alla bilder som är högre än de är breda
        const posterPath = tmdbData.results[0].poster_path;
        const portrait = `https://image.tmdb.org/t/p/w342${posterPath}`;

        // backdrop till hero/details & alla bilder som är bredare än de är höga
        const backdropPath = tmdbData.results[0].backdrop_path;
        const hero = `https://image.tmdb.org/t/p/w1280${backdropPath}`;

        // matchar ihop showtimesData med movie id
        const movieShowtimes = showtimesData.filter((showtime) => showtime.movieId === movie.id);

        // objektet som skapas
        return {
            id: movie.id,
            title: movie.title,
            newRelease: movie.newRelease,
            comingSoon: movie.comingSoon,
            description: omdbData.Plot,
            rating: omdbData.imdbRating,
            runtime: omdbData.Runtime,
            genre: omdbData.Genre,
            portraitImg: portrait,
            heroImg: hero,
            showtimes: movieShowtimes
        }
    } catch (error) {
        console.error("Error fetching movie:", movie.title, error);

        return {
            id: movie.id,
            title: movie.title,
            newRelease: movie.newRelease,
            comingSoon: movie.comingSoon,
            description: "Could not load description.",
            rating: "-",
            runtime: "-",
            genre: "Unknown",
            portraitImg: "",
            heroImg:""
        };
    }
}

export async function getMovies() {
    const movies = await Promise.all(
        titleData.map((movie) => getMovie(movie))
    );
    return movies;
}