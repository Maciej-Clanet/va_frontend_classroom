import "./ProfileButton.css"
import avatar from "../../Assets/Temp/Avatar.png"
import { useAuth } from "../../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const ProfileButton = () =>{
    const navigate = useNavigate()
    const {username} = useAuth()
    return(
        <button className="profile-button" onClick={() => navigate("/profile")}>
            <img src={avatar}/>
            <span className="text-label prominent">{username}</span>
        </button>
    )
}

export default ProfileButton