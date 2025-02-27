import { useState } from "react";
import axios from "axios";

// importazione dei componenti
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  // creazione funzione per ricerca dell' utente nella barra di ricerca
  function handleSearch(filmName) {

    // definizione costante url con endpoint
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2cd30f9da4642da67ee7423f60006f8a&query=${filmName}&language=it-IT`;

    // invio richiesta con Axios
    axios.get(url).then(function (response) {

      // console log dell'oggetto con i film trovati
      console.log(response.data.results);

      // aggiorno "movies" con i dati dei film importati grazie a SetMovies
      setMovies(response.data.results);
    });
  }

  return (
    <div>
      <h1>Ricerca Film :</h1>
      {/* inclusione componente SearchBar a cui donare la prop handlesearch */}
      <SearchBar handleSearch={handleSearch} />
      {/* inclusione componente MovieList a cui donare la prop movies */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
