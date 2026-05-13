import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import './MovieDetails.css';

import { getTrailer } from "../services/getTrailer.js";
import useMoviesStore from "../stores/moviesStore.js";

//Components
import DetailsHero from '../components/Details/DetailsHero.jsx';
import ShowtimePicker from '../components/ShowtimePicker/ShowtimePicker.jsx';
import Button from '../components/Button/Button.jsx';
import Loading from '../components/Loading/Loading.jsx';
import TicketPicker from "../components/TicketPicker/TicketPicker.jsx";
import LocationSelectorWidget from "../components/LocationSelector/LocationSelectorWidget.jsx"

//Page
import NotFound from './NotFound.jsx'

function MovieDetails() {
    const { id } = useParams();
    const getMovieById = useMoviesStore((state) => state.getMovieById);
    const movies = useMoviesStore((state) => state.movies);
    const movie = getMovieById(Number(id));
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const isLoading = useMoviesStore((state) => state.isLoading);

    const navigate = useNavigate();

    const [trailerUrl, setTrailerUrl] = useState(null);
    const [isTrailerLoading, setIsTrailerLoading] = useState(true);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, [movies.length, fetchMovies]);

    useEffect(() => {
        if (!movie) return;

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

    const cityIds = movie.showtimes.map((e) => e.cityId);

    return (
        <>
            <div className="back-button-wrapper">
                <Button
                    text="← Back"
                    btnType="secondary medium"
                    onClick={() => navigate(-1)}
                />
            </div>
            <DetailsHero
                movie={movie}
                trailerUrl={trailerUrl}
                isTrailerLoading={isTrailerLoading}
            />
            <section className='booking-details'>
                {cityIds.length === 0
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