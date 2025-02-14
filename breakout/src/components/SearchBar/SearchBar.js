import "./SearchBar.css";
import searchIcon from "../../assets/icons/search-icon.png";

function SearchBar () {
    return (
        <div class="search-bar">
            <input type="text" placeholder="TO SEARCH FOR" />
            <button type="submit">
                <img src={searchIcon} alt="search" />
            </button>
        </div>

    )
}

export default SearchBar;