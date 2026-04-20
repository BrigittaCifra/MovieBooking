
import { useState, useEffect, useRef } from 'react';
import "./DetailsHero.css";





export default function DetailsHero({ movie, trailerUrl, isTrailerLoading }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const descriptionRef = useRef(null);

// useEffect för responsiv anpassning av innehåll i description
// useEffect gör att skärmen mäts efter render och ger därför rätt värden för hur mycket text som visas
    useEffect(() => {
        function checkIfTruncated() {
            if (descriptionRef.current) {
                const isCutOff = 
                descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
                setIsTruncated(isCutOff);
            }
        }
        checkIfTruncated();
        // lyssnar på resize av skärm och anpassar efter storlek
        window.addEventListener("resize", checkIfTruncated);

        return () => window.removeEventListener("resize", checkIfTruncated);
    }, [movie.description, isExpanded]);

    return (
        // Visa video om tillgänglig, annars bild
        <div className="detailsHero">
            <div className="heroContainer">
                {isTrailerLoading ? (
                    <div className="heroLoading" />
                ) : trailerUrl ? (
                    isPlaying ? (
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
                        <div className="heroPreview" onClick={() => setIsPlaying(true)}>
                            <img className="heroFrame" src={movie.heroImg} alt={movie.title} />
                            <div className="heroOverlay"></div>
                            <button type="button" className="playButton">
                                <span className="material-symbols-outlined">play_circle</span>
                            </button>
                        </div>
                    )
                ) : (
                    <img className="heroFrame" src={movie.heroImg} alt={movie.title} />
                )}
            </div>
            <div className="infoContainer container">
                <div className="detailsHeading">
                    <h1>{movie.title}</h1>
                    <div className="detailsHeadingInfo">
                        {/* Tar de två förste genrerna i arrayen och separerar med kommatecken*/}
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
                        <div className={`descriptionWrapper ${isExpanded ? "expanded" : ""}`}>
                            <p id="movie-description"
                                ref={descriptionRef}
                                className={`descriptionText ${isExpanded ? "expanded" : ""}`}
                                >
                                {movie.description}
                            </p>
                            {!isExpanded && isTruncated && <div className="descriptionFade"></div>}
                        </div>
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

