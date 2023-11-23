import "./SearchBar.css"
import {ReactComponent as SearchIcon} from "../../Assets/Icons/SearchIcon.svg"
import { useState } from "react"

const SearchBar = () => {
    const [selected, setSelected] = useState(false);

    return(
        <form className="search-container">
            {!selected && <SearchIcon/> }
            <input 
                className="search-bar  text-label" 
                type="text" 
                placeholder="Search"
                onFocus={() => setSelected(true)}
                onBlur={() => setSelected(false)}
                />
        </form>
    )
}

export default SearchBar;