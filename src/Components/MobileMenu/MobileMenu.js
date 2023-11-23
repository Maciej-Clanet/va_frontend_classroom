import "./MobileMenu.css"
import MobileNavLink from "../MobileNavLink/MobileNavLink";

const MobileMenu = () => {
    return(
        <div className="mobile-menu">
            <MobileNavLink text="Home" path="/"/>
            <MobileNavLink text="Learn" path="/Learn"/>
            <MobileNavLink text="Shop" path="/Shop"/>
            <MobileNavLink text="Explore" path="/Explore"/>
        </div>
    )
}
export default MobileMenu; 