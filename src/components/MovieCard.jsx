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

            <div className="movie-card"
                // imposto un'immagine di default se non c'è disponibilità della copertina del film
                style={{
                    backgroundImage: movie.poster_path
                        ? `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`
                        : `url(https://img.freepik.com/foto-gratuito/popcorn-al-cinema_23-2147988937.jpg?t=st=1740744663~exp=1740748263~hmac=d028b36f8dfa333a920082a832026a11d90d124ae9df706397b2d5f7a704bb59&w=1380)`,
                }}
            >
                {/* gestione output delle info in overlay */}
                <div className="card-overlay">
                    <h3>{movie.title || movie.name}</h3>

                    <p><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</p>
                    <p className="overview"><strong>Overview:</strong> {movie.overview}</p>

                    <label><strong>Voto:</strong> {getStars(movie.vote_average)}</label>
                    <img className="flagpath" src={flagPath} alt={movie.original_language} />
                </div>


            </div >

        </>
    );
}

export default MovieCard;
