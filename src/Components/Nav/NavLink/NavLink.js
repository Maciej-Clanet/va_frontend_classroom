import "./NavLink.css"
import { useNavigate } from "react-router-dom";

const NavLink = ({text, path}) => {
    const navigate = useNavigate();

    return <button className="nav-link text-title" onClick={() => navigate(path)}>{text}</button>
}

export default NavLink;