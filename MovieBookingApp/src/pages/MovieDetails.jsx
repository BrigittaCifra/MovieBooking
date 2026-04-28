import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { getTrailer } from "../services/getTrailer.js";
import useMoviesStore from "../stores/moviesStore.js";

//Components
import DetailsHero from "../components/Details/DetailsHero";
import ShowtimePicker from '../components/ShowtimePicker/ShowtimePicker.jsx';

function MovieDetails() {
    const { id } = useParams();
    //Hämtar specifik film baserat på id från store
    const getMovieById = useMoviesStore((state) => state.getMovieById);
    // movies är arrayen med alla filmobjekt, behövs för att filtrera för t.ex. karusell
    const movies = useMoviesStore((state) => state.movies);
    // filmobjektet som details använder 
    const movie = getMovieById(Number(id));
    // triggar API anropen
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);

    // används av details hero för uppspelning av trailer
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [isTrailerLoading, setIsTrailerLoading] = useState(true);

    useEffect(() => {
        // fallback ifall filmerna inte hämtats i home page först
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    useEffect(() => {
        if (!movie) return;

        // använder getTrailer service
        async function fetchTrailer() {
            setIsTrailerLoading(true);
            try {
                const trailer = await getTrailer(movie.tmdbId);
                setTrailerUrl(trailer);
                setIsTrailerLoading(false);
            } catch (err) {
                console.error("Error fetching trailer");
                return null;
            }
        }
        fetchTrailer();
    }, [movie]);

    //lägg till här för att filtrera filmer till karuseller

    if (!movie) return <p>Loading...</p>;
    return (
        <>
            <DetailsHero 
            movie={movie}
            trailerUrl={trailerUrl}
            isTrailerLoading={isTrailerLoading} />
            <ShowtimePicker movieId={id} /*Jag tror att det blir showtimes={movie.showtimes} */ />
        </>
    )
}

export default MovieDetails;