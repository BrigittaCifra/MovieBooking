import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import './MovieDetails.css';

import { getTrailer } from "../services/getTrailer.js";
import useMoviesStore from "../stores/moviesStore.js";
import useCitiesStore from "../stores/citiesStore.js";

//Components
import DetailsHero from '../components/Details/DetailsHero';
import ShowtimePicker from '../components/ShowtimePicker/ShowtimePicker.jsx';
import Button from '../components/Button/Button.jsx';
import Loading from '../components/Loading/Loading.jsx';
import TicketPicker from "../components/TicketPicker/TicketPicker.jsx";
import LocationSelectorWidget from "../components/LocationSelector/LocationSelectorWidget.jsx"

//Page
import NotFound from './NotFound.jsx'

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
    // Loading state från store
    const isLoading = useMoviesStore((state) => state.isLoading);

    //City store
    const cities = useCitiesStore((state) => state.cities);

    const navigate = useNavigate();

    // används av details hero för uppspelning av trailer
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [isTrailerLoading, setIsTrailerLoading] = useState(true);

    useEffect(() => {
        // fallback ifall filmerna inte hämtats i home page först
        if (movies.length === 0) {
            fetchMovies();
        }
    }, [movies.length, fetchMovies]);

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
                setTrailerUrl(null);
                setIsTrailerLoading(false);
            }
        }
        fetchTrailer();
    }, [movie]);

    if (isLoading) return <Loading />;
    if (!movie) return <NotFound />;

    //Hämtar ut alla city id:n
    const cityIds = movie.showtimes.map((e) => e.cityId);
    const availableCities = cities.filter((city) => cityIds.includes(city.id));

    return (
        <>
            <DetailsHero
                movie={movie}
                trailerUrl={trailerUrl}
                isTrailerLoading={isTrailerLoading}
            />
            <section className='booking-details'>
                {availableCities.length === 0
                    ? <p>No showtimes found</p>
                    : <>
                        <LocationSelectorWidget movieData={movie} />
                        <ShowtimePicker movieData={movie} />
                        <TicketPicker />
                        <Button
                            text="Book tickets"
                            btnType="primary medium"
                            onClick={() => navigate(`/Booking/${id}`)}
                        />
                    </>
                }
            </section>
        </>
    )


}

export default MovieDetails;