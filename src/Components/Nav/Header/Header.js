import "./Header.css"
import PagesNav from "../PagesNav/PagesNav"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import PrimaryButton from "../PrimaryButton/PrimaryButton"

import { useNavigate } from "react-router-dom"

import {ReactComponent as TempIcon} from "../../../Assets/Icons/SearchIcon.svg"


const Header = () => {
    const navigate = useNavigate()

    return(
        <header>
            <Logo/>
            <PagesNav/>
            <SearchBar/>
            <PrimaryButton 
                text="Sign In" 
                icon={<TempIcon/>} 
                action={() => navigate("/login")}
                />
        </header>
    )
}

export default Header