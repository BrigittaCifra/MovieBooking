
// DetailsHero tar trailer från DetailsPage
// <DetailsHero movie={movie} trailerUrl={trailer} TrailerIsLoading={TrailerIsLoading} />
import { getTrailer } from "../../services/getTrailer.js";
import { useEffect, useState } from "react";
import { DetailsHero } from "./DetailsHero.jsx";

export default function DetailsPage({ movie }) {
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [trailerIsLoading, setTrailerIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTrailer() {
            setTrailerIsLoading(true);
            try {
            const trailer = await getTrailer(movieId);
            setTrailerUrl(trailer);
            setTrailerIsLoading(false);
            } catch (err) {
                console.error("Error fetching trailer");
                return null;
            }
        }
        fetchTrailer();
    }, [movie]);

    return (
        <div>
            <DetailsHero
            movie={movie}
            trailerUrl={trailerUrl}
            trailerIsLoading={trailerIsLoading}
            />
        </div>
    )

}