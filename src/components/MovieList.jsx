// funzione per generare lista film
function MovieList(props) {
    return (

        <div>
            <h2>Risultati:</h2>

            {/* controllo se ci sono film corrispondenti */}
            {props.movies.length > 0 ? (

                // se ci sono film corrispondenti genero l'output con le info del film mappando l'oggetto ricevuto in prop
                props.movies.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title || movie.name}</h3>
                        <p>Titolo originale:{movie.original_title || movie.original_name}</p>
                        <img src="" alt={movie.original_language} />

                        <p>Voto: {movie.vote_average}</p>
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
