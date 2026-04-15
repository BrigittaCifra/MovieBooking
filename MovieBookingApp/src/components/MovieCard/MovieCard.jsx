
// import FavoritesButton from "/FavoritesButton.jsx";

// lägg till länk till details när component finns
    // logik kring aria-label - add to favorites / remove from favorites

import "./movieCard.css";
import "../../styles/variables.css"

export default function MovieCard({ movie }) {
    return (
        <div className="movieCard" aria-label={`View details for ${movie.title}`}>
            {/*<FavoritesButton movieId={movie.id} aria-label="Add to favorites"/>*/}
            <img className="cardImg" src={movie.portraitImg} alt={movie.title} loading="lazy" />
            <div className="cardInfo">
               <p className="cardTitle">{movie.title}</p> 
                <div className="containerGenreRated">
                    {movie.genre.length === 1 ? <span>{movie.genre[0]}</span>
                        : <span>{`${movie.genre[0]} · ${movie.genre[1]}`}</span>} 
                </div>
                
            </div>
        </div>
    )
}

/* 
<span>{movie.age}</span>

*/
