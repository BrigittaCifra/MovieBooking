
import { useState } from 'react';




export default function DetailsHero({ movie, trailerUrl, isTrailerLoading }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 150;
    const shortText = movie.description.slice(0, maxLength);
    const shouldShorten = movie.description.length > maxLength;

    return (
        // Visa video om tillgänglig, annars bild
        <div className="detailsHero">
            {isTrailerLoading ? (
                <div className="heroLoading" />
            ) : trailerUrl ? (
                <iframe className="heroFrame"
                    src={trailerUrl}
                    title={`Trailer for ${movie.title}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            ) : (
                <img className="heroFrame" src={movie.heroImg} alt={movie.title} />
            )}

            <div className="detailsHeading">
                <h1>{movie.title}</h1>
                <div className="detailsHeadingInfo">
                    {/* Tar de två förste genrerna i arrayen och separerar med kommatecken*/}
                    <p>`${movie.genre.slice(0, 2).join(", ")}</p>
                    <div className="dot" />
                    <p>{movie.runtime}</p>
                    <div className="dot" />
                    <p>{movie.rated}</p>
                </div>
            </div>
            <div className="detailsContent">
                <div className="detailsDescription">
                    <h3>Description</h3>
                    <p id="movie-description">
                        {isExpanded || shouldShorten
                            ? movie.description
                            : `${shortText}...`}
                    </p>
                    {/* toggle expanded */}
                    {shouldexpand && (
                        <button className="toggleReadMore"
                            onClick={() => setIsExpanded(!isExpanded)}
                            aria-expanded={isExpanded}
                            aria-controls="movie-description">
                            {isExpanded ? "Show less" : "Read more"}
                        </button>
                    )}
                </div>
                <details>
                    <summary>Details</summary>
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
    )
}

