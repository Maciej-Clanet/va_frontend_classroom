import "./MobileMenu.css"
import MobileNavLink from "../MobileNavLink/MobileNavLink";
import IconButtonTransparent from "../IconButtonTransparent/IconButtonTransparent";
import IconButton from "../IconButton/IconButton";
import SearchBar from "../SearchBar/SearchBar";

import { ReactComponent as PencilIcon } from "../../Assets/Icons/PencilIcon.svg"
import { ReactComponent as CartIcon } from "../../Assets/Icons/CartIcon.svg"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../Contexts/AuthContext";

const MobileMenuTopRow = () => {
    const navigate = useNavigate()
    const {username, logout} = useAuth()
    return (
        <div className="mobile-menu-top-row">
            <IconButton icon={<CartIcon />} onClick={() => navigate("/cart")} />
            {!username && <IconButtonTransparent text="SIGN UP" icon={<PencilIcon />} onClick={() => navigate("/register")} /> }
            {username && <IconButtonTransparent text="SIGN OUT" icon={<PencilIcon/>} onClick={() => {logout(); navigate("/login")}} /> }  
        </div>
    )
}

const MobileMenu = () => {
    
    return (
        <div className="mobile-menu">
            <MobileMenuTopRow />
            <SearchBar />
            <MobileNavLink text="Home" path="/" />
            <MobileNavLink text="Learn" path="/Learn" />
            <MobileNavLink text="Shop" path="/Shop" />
            <MobileNavLink text="Explore" path="/Explore" />
        </div>
    )
}
export default MobileMenu; 