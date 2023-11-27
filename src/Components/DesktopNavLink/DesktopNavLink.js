import "./DesktopNavLink.css"
import {useNavigate} from "react-router-dom"

const DesktopNavLink = ({text, path}) =>{
    const navigate = useNavigate()
    return <button className="desktop-nav-link text-title" onClick={() => navigate(path)}>{text}</button>
}

export default DesktopNavLink;