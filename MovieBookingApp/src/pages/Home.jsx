import { useEffect } from 'react';

//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.jsx'
import useMoviesStore from "../stores/moviesStore.js";
import MovieCarousel from '../components/MovieCarousel/MovieCarousel.jsx';

function Home() {
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    const newReleases = movies.filter((m) => m.newRelease === true);
    const comingSoon = movies.filter((m) => m.comingSoon === true);

    return (
        <>
            <HeroCarousel />
            <MovieCarousel movies={newReleases} title="NU PÅ BIO" />
            <MovieCarousel movies={comingSoon} title="KOMMER SNART" />
            <MovieCarousel movies={movies} title="ALLA FILMER" />
        </>
    )
}

export default Home;