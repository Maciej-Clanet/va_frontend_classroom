import "./Header.css"
import PagesNav from "../PagesNav/PagesNav"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import PrimaryButton from "../PrimaryButton/PrimaryButton"

import { useNavigate } from "react-router-dom"

import {ReactComponent as UserIcon} from "../../../Assets/Icons/UserIcon.svg"


const Header = () => {
    const navigate = useNavigate()

    return(
        <header>
            <Logo/>
            <PagesNav/>
            <SearchBar/>
            <PrimaryButton 
                text="Sign In" 
                icon={<UserIcon/>} 
                action={() => navigate("/login")}
                />
        </header>
    )
}

export default Header