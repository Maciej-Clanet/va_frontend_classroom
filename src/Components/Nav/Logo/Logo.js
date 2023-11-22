import "./Logo.css"
import { useNavigate } from "react-router-dom"


const Logo = () => {
    const navigate = useNavigate()
    return(
        <div className="logo-container text-title" onClick={() => navigate("/")} >
            AV
        </div>
    )
}

export default Logo