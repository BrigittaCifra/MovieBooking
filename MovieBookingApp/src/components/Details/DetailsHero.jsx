
import { useState } from 'react';




export default function DetailsHero({ movie, trailerUrl, TrailerIsLoading }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const shortText = movie.description.slice(0, 150);

    return (
        // Visa video om tillgänglig, annars bild
        <div className="detailsHero">
            {!TrailerIsLoading && trailerUrl ? (
                <iframe className="heroFrame"
                    src={trailerUrl}
                    title={movie.title}
                    allowFullScreen
                />
            ) : (
                <img className="heroFrame" src={movie.heroImg} alt={movie.title} />
            )}
            <div className="detailsHeading">
                <h2>{movie.title}</h2>
                <div className="detailsHeadingInfo">
                    <p>{movie.genre}</p>
                    <p>{movie.runtime}</p>
                    <p>{movie.rated}</p>
                </div>
            </div>
            <div className="detailsContent">
                <div className="detailsDescription">
                    <p>Description</p>
                    <p>{isExpanded ? movie.description : shortText + "..."}</p>
                    {/* toggle expanded */}
                    <button className="toggleReadMore"
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                        aria-controls="description">
                        {isExpanded ? "Show less" : "Read more"}
                    </button>
                </div>
                <details>
                    <summary>Details</summary>
                    <dl>
                        <dt>Title</dt>
                        <dd>{movie.title}</dd>
                        <dt>Genre</dt>
                        <dd>{movie.genre}</dd>
                        <dt>Runtime</dt>
                        <dd>{movie.runtime}</dd>
                        <dt>Rated</dt>
                        <dd>{movie.rated}</dd>
                        <dt>Language</dt>
                        <dd>{movie.language}</dd>
                        <dt>Country</dt>
                        <dd>{movie.country}</dd>
                        <dt>Stars</dt>
                        <dd>{movie.actors}</dd>
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

