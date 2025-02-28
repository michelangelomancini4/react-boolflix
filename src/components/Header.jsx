// importo la searchbar
import SearchBar from "./SearchBar";

export default function Header({ handleSearch }) {


    return (<header>


        <div>
            <SearchBar handleSearch={handleSearch} />
        </div>
    </header>);
}