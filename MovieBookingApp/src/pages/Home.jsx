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

    return (
        <>
            <HeroCarousel />
        </>
    )
}

export default Home;