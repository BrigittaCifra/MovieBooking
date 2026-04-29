import { useEffect } from 'react';

//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.jsx'
import useMoviesStore from "../stores/moviesStore.js";

function Home() {
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    return (
        <>
            <HeroCarousel />
        </>
    )
}

export default Home;