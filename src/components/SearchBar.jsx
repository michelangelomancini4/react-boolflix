// importo usestate
import { useState } from "react";

//   funzione per gestire l'input nella barradi ricerca (con props ricevuta da app.jsx)
function SearchBar(props) {

    // inizializzazione dello stato film 
    const [film, setFilm] = useState("");


    // funzione richiamata quando l'utente clicca sul pulsante "Cerca"
    function SearchClick() {

        // richiamo funzione con props di app.jsx
        props.handleSearch(film);
    }

    // ouptut in pagina

    return (
        <div>
            <input
                type="text"
                className="input"
                placeholder="Cerca un film o una serie tv"
                value={film}
                onChange={(event) => setFilm(event.target.value)}
            />
            <button className="cercaButton" onClick={SearchClick}>Cerca!</button>
        </div>
    );
}

export default SearchBar;
