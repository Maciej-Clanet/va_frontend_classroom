import "./Profile.css"
import { useAuth } from "../Contexts/AuthContext"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [profileData, setProfileData] = useState()
    const navigate = useNavigate()


    if(isLoading){return <div>Loading...</div>}

    return(
        <>
            profile page  
        </>
    )
}

export default Profile