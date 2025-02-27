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
                        <h3>{movie.title}</h3>
                        <label>Titolo originale:{movie.original_title}</label>
                        <p>Lingua: {movie.original_language}</p>
                        <span>Voto: {movie.vote_average}</span>
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
