//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.jsx'

function Home() {
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);

    useEffect(() => {
        //för en fetch per session
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    //Något om newRelease för filmer till hero carousel? alla med newRelease=true i karusell?
    //isf tar Hero t.ex. movies={newRelease} & cardCarousel elr vad man vill döpa till movies={movies}
    // karusellen för cards mappar med movie

    return (
        <>
            <HeroCarousel />
        </>
    )
}

export default Home;