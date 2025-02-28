// importo la searchbar
import SearchBar from "./SearchBar";

export default function Header({ handleSearch }) {


    return (
        <header>
            <span className="logo"><strong>BOOFLIX</strong></span>
            {/* <img className="logo" src="../public/logo/cinemalogo.jpg" alt="" /> */}
            <h2>Ricerca film e serie tv con un click!</h2>
            <div className="searchbar">
                <SearchBar handleSearch={handleSearch} />
            </div>
        </header>
    );
}