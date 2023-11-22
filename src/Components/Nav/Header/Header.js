import "./Header.css"
import PagesNav from "../PagesNav/PagesNav"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"

const Header = () => {
    
    return(
        <header>
            <Logo/>
            <PagesNav/>
            <SearchBar/>
        </header>
    )
}

export default Header