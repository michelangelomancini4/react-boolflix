
// import per gestire lo stato
import { useEffect, useState } from "react";

// import di useparams per gestire parametri dinamici
import { useParams } from "react-router-dom";

// importo link per gestire prev-next
import { Link } from "react-router-dom";

// import per gestire le chiamate
import axios from "axios";

function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const apiKey = "2cd30f9da4642da67ee7423f60006f8a";
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=it-IT`;

        axios.get(movieUrl).then((response) => {
            setMovie(response.data);
        });
    }, [id]);

    // output stars rating
    function getStars(vote) {
        const stars = Math.ceil(vote / 2);
        const starsArray = [];

        for (let i = 0; i < stars; i++) {
            starsArray.push(<i key={i} className="fas fa-star"></i>);
        }
        for (let i = stars; i < 5; i++) {
            starsArray.push(<i key={i} className="far fa-star"></i>);
        }

        return starsArray;
    }

    const flagPath = `/images/${movie.original_language}.jpg`;

    return (
        <>
            {/* logica per gestire visualizzazione pietanza precedente o successiva */}
            < div className="prevnext" >
                <Link to={`http://localhost:5173/movie/${id - 1}`} className='prevnext' >&#8678;  PREV- </Link>
                <Link to={`http://localhost:5173/movie/${parseInt(id) + 1}`} className='prevnext' >-NEXT &#8680;</Link>
            </div >
            <div className="detailBlockInfo">
                <div className="movie-detail">
                    <h3>{movie.title || movie.name}</h3>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || movie.name}
                    />
                </div>
                <div className="infofilm">
                    <p><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>

                    <label><strong>Voto:</strong> {getStars(movie.vote_average)}</label>
                    <img className="flagpath" src={flagPath} alt={movie.original_language} />

                </div>
            </div>

        </>
    );
}

export default MovieDetail;
