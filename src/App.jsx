import { useState } from "react";
import axios from "axios";

// importazione dei componenti
import MovieList from "./components/MovieList";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);

  // creazione funzione per ricerca dell' utente nella barra di ricerca
  function handleSearch(searchInput) {

    // definizione costante filmUrl con endpoint del database dei film
    const filmUrl = `https://api.themoviedb.org/3/search/movie?api_key=2cd30f9da4642da67ee7423f60006f8a&query=${searchInput}&language=it-IT`;

    // definizione costante seriesUrl con endpoint del database delle serie tv
    const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=2cd30f9da4642da67ee7423f60006f8a&query=${searchInput}&language=it-IT`;

    // invio richiesta con Axios per i film
    axios.get(filmUrl).then(function (filmResponse) {

      // console log dell'oggetto con i film trovati
      console.log(filmResponse.data.results);


      // invio seconda richiesta con Axios per le serie tv
      axios.get(seriesUrl).then(function (serietvResponse) {

        // console log dell'oggetto con le serie tv trovate
        console.log(serietvResponse.data.results);

        // sommo i risultati delle due risposte
        const filmAndSeriesResults = [...filmResponse.data.results, ...serietvResponse.data.results];

        setMovies(filmAndSeriesResults);
      });
    });
  }

  return (
    <div>
      <h1>Ricerca Film e serie tv:</h1>
      {/* inclusione componente SearchBar a cui donare la prop handlesearch */}
      <Header handleSearch={handleSearch} />
      {/* inclusione componente MovieList a cui donare la prop movies */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
