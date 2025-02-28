import { NavLink } from "react-router-dom";

// importo la searchbar
import SearchBar from "./SearchBar";

export default function Header({ handleSearch }) {


    return (
        <header>
            {/* creo collegamento con la home con navlink (svuoto la lista dei film richiamando handlesearch) */}
            <NavLink to={`/`} onClick={() => handleSearch("")}> <span className="logo"><strong>BOOFLIX</strong></span></NavLink>
            {/* <img className="logo" src="../public/logo/cinemalogo.jpg" alt="" /> */}
            <h2>Ricerca film e serie tv con un click!</h2>
            <div className="searchbar">
                <SearchBar handleSearch={handleSearch} />
            </div>
        </header>
    );
}