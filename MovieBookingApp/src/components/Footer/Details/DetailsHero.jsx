
import { useState, useEffect, useRef } from 'react';
import "./DetailsHero.css";





export default function DetailsHero({ movie, trailerUrl, isTrailerLoading }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const descriptionRef = useRef(null);

    descriptionRef = useRef(null);

    // Kollar om beskrivningen får plats eller kapas i nuvarande layout
    // Används för att avgöra om "Read more"-knappen och fade-effekten ska visas
    useEffect(() => {
        function checkIfTruncated() {
            if (descriptionRef.current) {
                const isCutOff =
                    descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
                setIsTruncated(isCutOff);
            }
        }
        //Kör direkt när komponenten renderas eller när innehållet ändras
        checkIfTruncated();
        // Kör om kontrollen vid resize så att truncation följer skärmstorleken
        window.addEventListener("resize", checkIfTruncated);

        return () => window.removeEventListener("resize", checkIfTruncated);
    }, [movie.description, isExpanded]);

    return (
        // Visar trailer om den finns och användaren har startat den
        <div className="detailsHero">
            <div className="heroContainer">
                {isTrailerLoading ? (
                    <div className="heroLoading" />
                ) : trailerUrl ? (
                    isPlaying ? (
                        /* När användaren startat trailern visas video istället för bild */
                        <div className="heroVideo">
                            <button type="button" className="closeButton" onClick={() => setIsPlaying(false)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <iframe className="heroFrame"
                                src={`${trailerUrl}?autoplay=1`}
                                title={`Trailer for ${movie.title}`}
                                allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <div className="heroOverlay"></div>
                        </div>
                    ) : (
                         /* Om trailer finns men inte spelas visas en klickbar bild */
                        <div className="heroPreview" onClick={() => setIsPlaying(true)}>
                            <img className="heroFrame" src={movie.heroImg} alt={movie.title} />
                            <div className="heroOverlay"></div>
                            <button type="button" className="playButton">
                                <span className="material-symbols-outlined">play_circle</span>
                            </button>
                        </div>
                    )
                ) : (
                    /* Fallback om ingen trailer finns */
                    <img className="heroFrame" src={movie.heroImg} alt={movie.title} />
                )}
            </div>
            <div className="infoContainer container">
                <div className="detailsHeading">
                    <h1>{movie.title}</h1>
                    <div className="detailsHeadingInfo">
                       {/* Begränsar genrerna i rubriksektionen för att hålla layouten ren */}
                        <p>{`${movie.genre.slice(0, 2).join(", ")}`}</p>
                        <div className="dot" />
                        <p>{movie.runtime}</p>
                        <div className="dot" />
                        <p>{movie.rated}</p>
                    </div>
                </div>
                <div className="detailsContent">
                    <div className="detailsDescription">
                        <h3>Description</h3>
                        {/* Wrapper används för att kunna lägga fade-effekt över trunkerad text */}
                        <div className={`descriptionWrapper ${isExpanded ? "expanded" : ""}`}>
                            <p id="movie-description"
                                ref={descriptionRef}
                                className={`descriptionText ${isExpanded ? "expanded" : ""}`}
                            >
                                {movie.description}
                            </p>
                            {/* Fade visas bara när texten är trunkerad och inte expanderad */}
                            {!isExpanded && isTruncated && <div className="descriptionFade"></div>}
                        </div>
                        {/* Knappen visas bara om texten faktiskt kapas, eller om den redan är öppen(see less) */}
                        {(isTruncated || isExpanded) && (
                            <button type="button" className="toggleReadMore"
                                onClick={() => setIsExpanded(!isExpanded)}
                                aria-expanded={isExpanded}
                                aria-controls="movie-description"
                            >
                                {isExpanded ? "Show less" : "Read more"}
                            </button>
                        )}
                    </div>
                    {/* Details/summary används för en enkel utfällbar sektion utan extra state */}
                    <details>
                        <summary>
                            Details
                            <span className="material-symbols-outlined chevron">
                                expand_more
                            </span>
                        </summary>
                        <dl>
                            <dt>Title</dt>
                            <dd>{movie.title}</dd>
                            <dt>Genre</dt>
                            <dd>{movie.genre.join(", ")}</dd>
                            <dt>Runtime</dt>
                            <dd>{movie.runtime}</dd>
                            <dt>Rated</dt>
                            <dd>{movie.rated}</dd>
                            <dt>Language</dt>
                            <dd>{movie.language}</dd>
                            <dt>Country</dt>
                            <dd>{movie.country}</dd>
                            <dt>Actors</dt>
                            <dd>{movie.actors.join(", ")}</dd>
                            <dt>Director</dt>
                            <dd>{movie.director}</dd>
                            <dt>Released</dt>
                            <dd>{movie.released}</dd>
                        </dl>
                    </details>
                </div>
            </div>
        </div>
    )
}

