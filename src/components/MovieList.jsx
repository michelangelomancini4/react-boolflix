// funzione per generare lista film
function MovieList(props) {

    // funzione per calcolare le stelle con icone di Fontawesome
    function getStars(vote) {

        // calcolo per passare ad un rating più compatto ed arrotondato per eccesso
        const stars = Math.ceil(vote / 2);
        const starsArray = [];

        // Aggiungo le stelle piene
        for (let i = 0; i < stars; i++) {
            starsArray.push(<i key={i} className="fas fa-star"></i>);
        }

        // Aggiungo le stelle vuote
        for (let i = stars; i < 5; i++) {
            starsArray.push(<i key={i} className="far fa-star"></i>);
        }

        return starsArray;
    }

    return (

        <div>
            <h2>Risultati:</h2>

            {/* controllo se ci sono film corrispondenti */}
            {props.movies.length > 0 ? (

                // se ci sono film corrispondenti genero l'output con le info del film mappando l'oggetto ricevuto in prop
                props.movies.map((movie) => (

                    <div
                        key={movie.id}
                        className="movie-card"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`,
                        }}
                    >
                        <h3>{movie.title || movie.name}</h3>
                        <p>Titolo originale:{movie.original_title || movie.original_name}</p>
                        <p>Voto: {getStars(movie.vote_average)}</p>
                    </div>
                ))
            ) : (
                // output generato nel caso non ci siano film corrispondenti alla ricerca
                <p>Ci dispiace! Nessun film trovato!</p>
            )}
        </div>
    );
}

export default MovieList;
