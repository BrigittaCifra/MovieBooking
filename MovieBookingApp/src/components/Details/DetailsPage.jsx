
// DetailsHero tar trailer från DetailsPage
import { getTrailer } from "../../services/getTrailer.js";
import { useEffect, useState } from "react";
import DetailsHero from "./DetailsHero.jsx";
import "./DetailsPage.css";



// för styling, ta bort sen
const mockMovie = {
  title: "The Devil Wears Prada",
  genre: ["Action", "Sci-Fi", "Thriller"],
  runtime: "148 min",
  rated: "PG-13",
  description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea. A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea. A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea. A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
  language: "English",
  country: "USA",
  actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  director: "Christopher Nolan",
  released: "16 July 2010",
  heroImg: "https://images4.alphacoders.com/112/1122038.jpg"
};
const mockTrailer = "https://www.youtube.com/embed/YoHD9XEInc0";

export default function DetailsPage({ movie }) {
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [isTrailerLoading, setIsTrailerLoading] = useState(true);

    useEffect(() => {
        async function fetchTrailer() {
            setIsTrailerLoading(true);
            try {
            const trailer = await getTrailer(movieId);
            setTrailerUrl(trailer);
            setIsTrailerLoading(false);
            } catch (err) {
                console.error("Error fetching trailer");
                return null;
            }
        }
        fetchTrailer();
    }, [movie]);

    return (
        <div className="detailsPage">
            {/* 
            <DetailsHero
            movie={movie}
            trailerUrl={trailerUrl}
            isTrailerLoading={isTrailerLoading}
            />*/}
            <DetailsHero movie={mockMovie} trailerUrl={mockTrailer} isTrailerLoading={false} />
        </div>
    )

}