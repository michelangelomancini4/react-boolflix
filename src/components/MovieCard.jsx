function MovieCard({ movie }) {
    // funzione per calcolare le stelle
    function getStars(vote) {

        // conversione rating da 1/10 a 1/5 (con arrotondamento per eccesso con math.ceil)
        const stars = Math.ceil(vote / 2);
        const starsArray = [];

        // ciclo sui voti per generare stelle piene
        for (let i = 0; i < stars; i++) {
            starsArray.push(<i key={i} className="fas fa-star"></i>);
        }
        // ciclo sui voti per generare stelle vuote

        for (let i = stars; i < 5; i++) {
            starsArray.push(<i key={i} className="far fa-star"></i>);
        }

        return starsArray;
    }

    // creo costante per percorso immagini delle bandierine
    const flagPath = `../public/images/${movie.original_language}.jpg`;


    return (
        <>

            <div
                className="movie-card"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`,

                }}
            >
                {/* uso di || per differenziare proprietà diverse tra film e serie tv */}
                <h3>Titolo:{movie.title || movie.name}</h3>
                <p>Titolo originale: {movie.original_title || movie.original_name}</p>
                <p>Voto: {getStars(movie.vote_average)}</p>
                <img className="flagpath" src={flagPath} alt={movie.original_language} />


            </div>
        </>
    );
}

export default MovieCard;
