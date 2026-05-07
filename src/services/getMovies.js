// importerar mockdata
import { titleData, showtimesData } from "./movieData.js";

// importera API nycklar
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
if (!TMDB_API_KEY || !OMDB_API_KEY) {
    console.warn("Missing API Key");
}

export async function getMovie(movie) {
    // matchar ihop showtimesData med movie id
    // innan try för att nås från try och catch
    const movieShowtimes = showtimesData.filter((showtime) => showtime.movieId === movie.id);
    try {
        const omdbResponse = await fetch(`https://www.omdbapi.com/?t=${movie.title}&apikey=${OMDB_API_KEY}`);
        const omdbData = await omdbResponse.json();

        const tmdbResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie.title}&api_key=${TMDB_API_KEY}`);
        const tmdbData = await tmdbResponse.json();

        // TMDB lämnar en array av resultat, följande hämtar första resultatet av två bildtyper

        // portrait till cards & alla bilder som är högre än de är breda
        // null om path inte finns
        const posterPath = tmdbData.results?.[0]?.poster_path;
        const portrait = posterPath ? `https://image.tmdb.org/t/p/w342${posterPath}` : null;

        // backdrop till hero/details & alla bilder som är bredare än de är höga
        // null om path inte finns
        const backdropPath = tmdbData.results?.[0]?.backdrop_path;
        const hero = backdropPath ? `https://image.tmdb.org/t/p/w1280${backdropPath}` : null;

        const tmdbId = tmdbData.results?.[0]?.id;

        // objektet som skapas (med validering)
        return {
            id: movie.id,
            tmdbId: tmdbId,
            title: movie.title,
            newRelease: movie.newRelease,
            comingSoon: movie.comingSoon,

            description: omdbData.Plot !== "N/A"
                ? omdbData.Plot
                : "No description available",

            // åldersgräns
            rated: omdbData.Rated !== "N/A"
                ? omdbData.Rated
                : "-",

            // längd
            runtime: omdbData.Runtime !== "N/A"
                ? omdbData.Runtime
                : "Runtime unknown",

            released: omdbData.Released !== "N/A"
                ? omdbData.Released
                : "-",

            // genre kommer som träng med komma, split gör om det till array
            genre: omdbData?.Genre && omdbData.Genre !== "N/A"
                ? omdbData.Genre.split(", ")
                : [],

            country: omdbData.Country !== "N/A"
                ? omdbData.Country
                : "Unknown",

            language: omdbData.Language !== "N/A"
                ? omdbData.Language
                : "Unknown",

            // Skådespelare, kommer som en sträng, gör om till array
            actors: omdbData?.Actors && omdbData.Actors !== "N/A"
                ? omdbData.Actors.split(", ") : [],

            director: omdbData.Director !== "N/A"
                ? omdbData.Director
                : "Unknown",

            portraitImg: portrait || "/images/placeholderPortrait.png",

            heroImg: hero || "/images/placeholderHero.png",

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
            rated: "-",
            runtime: "-",
            released: "-",
            genre: ["Unknown"],
            country: "Unknown",
            language: "Unknown",
            actors: ["Unknown"],
            director: "Unknown",
            portraitImg: "/images/placeholderPortrait.png",
            heroImg: "/images/placeholderHero.png",
            showtimes: movieShowtimes
        };
    }
}

// använder getMovie och anropar alla
export async function getMovies() {
    try {
        const movies = await Promise.all(
            titleData.map((movie) => getMovie(movie))
        );
        return movies;
    } catch (error) {
        console.error("Error fetching movies");
        return [];
    }
}