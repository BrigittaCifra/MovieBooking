const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getTrailer(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`);
        const data = await response.json();

        // TMDB returns flera klipp, hitta trailer från youtube
        const trailer = data.results.find(video =>
            video.type === "Trailer" && video.site === "YouTube"
        );

        const trailerUrl = trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : null;

        return trailerUrl;

    } catch (error) {
        console.error("Error fetching trailer");
        return null;
    }
}