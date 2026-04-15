





export default function DetailsHero({ movie, trailerUrl, TrailerIsLoading }) {

    return (
        <div className="detailsHero">
            {!TrailerIsLoading && trailerUrl ? (
                <iframe
                    src={trailerUrl}
                    title={movie.title}
                    allowFullScreen
                />
            ) : (
                <img src={movie.heroImg} alt={movie.title} />
            )}
            <div className="heroContent">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                {/* genre, runtime, rated, skådespelare */}
            </div>
        </div>
    )
}

