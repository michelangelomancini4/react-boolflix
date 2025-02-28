import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
        <div className="cardContainer">


            {/* controllo se ci sono film o serie tv corrispondenti alla ricerca */}
            {movies.length > 0 ? (

                // itero con map il prop ricevuto, e per ogni iterazione creo una MovieCard e lo dono come prop a MovieCard.jsx
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) :
                (
                    // output nel caso non si trovino film o serie tv corrispondenti alla ricerca
                    <p>Ci dispiace! Nessun film trovato!</p>
                )}
        </div>
    );
}

export default MovieList;
