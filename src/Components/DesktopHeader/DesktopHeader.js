import "./DesktopHeader.css"
import Logo from "../Logo/Logo";
import DesktopNavLink from "../DesktopNavLink/DesktopNavLink";
import PrimaryIconButton from "../PrimaryIconButton/PrimaryIconButton";
import SecondaryIconButton from "../SecondaryIconButton/SecondaryIconButton";
import IconButton from "../IconButton/IconButton";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import SearchBar from "../SearchBar/SearchBar";

import {ReactComponent as UserIcon} from "../../Assets/Icons/UserIcon.svg";
import {ReactComponent as PencilIcon} from "../../Assets/Icons/PencilIcon.svg";
import {ReactComponent as CartIcon} from "../../Assets/Icons/CartIcon.svg"
import {useNavigate} from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";
import ProfileButton from "../ProfileButton/ProfileButton";

const DesktopNavLinks = () =>{
    return(
        <div className="desktop-nav-links-container">
            <DesktopNavLink text="Home" path="/"/>
            <DesktopNavLink text="Learn" path="/Learn"/>
            <DesktopNavLink text="Shop" path="/Shop"/>
            <DesktopNavLink text="Explore" path="/Explore"/>
        </div>
    )
}

const DesktopHeader = () =>{
    const navigate = useNavigate()

    const {username, logout} = useAuth();
    return(
        <header className="desktop-header">
            <Logo/>
            <DesktopNavLinks/>
            <SearchBar/>
            <div className="header-action-button-group">
                <IconButton icon={<CartIcon/>} onClick={() => navigate("/cart")} />
                {!username && <PrimaryIconButton text="Sign In" icon={<UserIcon/>} onClick={() => navigate("/login")} /> }
                {!username && <SecondaryIconButton text="Sign Up" icon={<PencilIcon/>} onClick={() => navigate("/register")} /> }
                {username && <ProfileButton/>}
                {username && <SecondaryIconButton text="Sign Out" icon={<PencilIcon/>} onClick={() => {logout(); navigate("/login")} }/> }
                <ThemeToggleButton />
            </div>
        </header>
    )
}
export default DesktopHeader;