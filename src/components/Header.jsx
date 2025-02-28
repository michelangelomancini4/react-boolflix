// importo la searchbar
import SearchBar from "./SearchBar";

export default function Header({ handleSearch }) {


    return (
        <header>

            <img src="../public/logo/cinemalogo.jpg" alt="" />
            <h2>Ricerca film e serie tv!</h2>
            <div className="searchbar">
                <SearchBar handleSearch={handleSearch} />
            </div>
        </header>
    );
}