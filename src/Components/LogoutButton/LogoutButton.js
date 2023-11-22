import "./LogoutButton.css"
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login")
        }).catch((error) => {
        // An error happened.
            alert("error signign out")
        });
    }


    return <button onClick={handleLogout}>Log Out</button>
}

export default LogoutButton;