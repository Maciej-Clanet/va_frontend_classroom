import "./MobileNavLink.css"
import {useNavigate} from "react-router-dom";

const MobileNavLink = ({text, path}) => {
    const navigate = useNavigate()

    return <button className="mobile-nav-link" onClick={() => navigate(path)}><span className="text-headline">{text}</span></button>
}

export default MobileNavLink
