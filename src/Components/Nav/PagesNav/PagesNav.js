import "./PagesNav.css"
import NavLink from "../NavLink/NavLink"
const PagesNav = () => {
    return (
        <div className="pages-nav">
            <NavLink text="Home" path="/" />
            <NavLink text="Learn" path="/Learn" />
            <NavLink text="Shop" path="/Shop" />
            <NavLink text="Explore" path="/Explore" />
        </div>
    )
}

export default PagesNav