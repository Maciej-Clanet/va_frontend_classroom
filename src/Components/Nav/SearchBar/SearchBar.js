import "./SearchBar.css"
import axios from "axios";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../Assets/Icons/SearchIcon.svg"

const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
    const [focused, setFocused] = useState(false)


    const submitSearch = () => {

    }
    // style={{"marginLeft":  "32px"}}
    return (
        <form id="search-form" onSubmit={submitSearch}>
            {!focused && <label for="search-bar">
                <SearchIcon
                    style={{ "marginLeft": "32px", "position": "absolute", "top": "50%", "transform": "translateY(-50%)" }} />
            </label>}
            <input
                id="search-bar-field"
                className="text-title"
                type="text"
                placeholder="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </form>
    )
}

export default SearchBar;