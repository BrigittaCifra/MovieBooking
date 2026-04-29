import { useEffect, useState } from 'react';

//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.jsx'
import useMoviesStore from "../stores/moviesStore.js";
import Campaign from '../components/Campaign/Campaign.jsx';
import MembershipForm from '../components/MembershipForm/MembershipForm.jsx';

function Home() {
    const [showMembershipForm, setShowMembershipForm] = useState(false);
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
            <Campaign onMembershipClick={() => setShowMembershipForm(true)} />
            {showMembershipForm && (
                <MembershipForm onClose={() => setShowMembershipForm(false)} />
            )}
        </>
    )
}

export default Home;