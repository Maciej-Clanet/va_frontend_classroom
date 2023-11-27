import "./MobileMenu.css"
import MobileNavLink from "../MobileNavLink/MobileNavLink";
import IconButtonTransparent from "../IconButtonTransparent/IconButtonTransparent";
import IconButton from "../IconButton/IconButton";
import SearchBar from "../SearchBar/SearchBar";

import {ReactComponent as PencilIcon} from "../../Assets/Icons/PencilIcon.svg"
import {ReactComponent as CartIcon} from "../../Assets/Icons/CartIcon.svg"
import { useNavigate }  from "react-router-dom"

const MobileMenuTopRow = () => {
    const navigate = useNavigate()
    return(
        <div className="mobile-menu-top-row">
                            <IconButton icon={<CartIcon/>} onClick={() => navigate("/cart")}/>
                <IconButtonTransparent text="SIGN UP" icon={<PencilIcon/>}  onClick={() => navigate("/register")}/>
        </div>
    )
}

const MobileMenu = () => {
    return(
        <div className="mobile-menu">
            <MobileMenuTopRow/>
            <SearchBar/>
            <MobileNavLink text="Home" path="/"/>
            <MobileNavLink text="Learn" path="/Learn"/>
            <MobileNavLink text="Shop" path="/Shop"/>
            <MobileNavLink text="Explore" path="/Explore"/>
        </div>
    )
}
export default MobileMenu; 