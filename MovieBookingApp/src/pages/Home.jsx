//Hooks
import { useEffect, useState } from 'react';

//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.jsx'
import useMoviesStore from "../stores/moviesStore.js";
import Campaign from '../components/Campaign/Campaign.jsx';
import MembershipForm from '../components/MembershipForm/MembershipForm.jsx';
import MovieCarousel from '../components/MovieCarousel/MovieCarousel.jsx';
import Loading from '../components/Loading/Loading.jsx';

function Home() {
    const [showMembershipForm, setShowMembershipForm] = useState(false);
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);
    const isLoading = useMoviesStore(state => state.isLoading);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    const newReleases = movies.filter((m) => m.newRelease === true);
    const comingSoon = movies.filter((m) => m.comingSoon === true);

    if (isLoading) return <Loading />;
    

    return (
        <>
            <HeroCarousel />
            <MovieCarousel movies={newReleases} title="NU PÅ BIO" />
            <MovieCarousel movies={comingSoon} title="KOMMER SNART" />
            <MovieCarousel movies={movies} title="ALLA FILMER" />
            <Campaign onMembershipClick={() => setShowMembershipForm(true)} />
            {showMembershipForm && (
                <MembershipForm onClose={() => setShowMembershipForm(false)} />
            )}
        </>
    )
}

export default Home;