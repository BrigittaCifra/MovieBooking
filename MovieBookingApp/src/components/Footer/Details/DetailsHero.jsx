
// <DetailsHero movie={movie} />

 export default function DetailsHero({ movie }) {
    return (
        <div>
            <img src={movie.heroImg} alt={movie.title} />
        </div>
    )
}