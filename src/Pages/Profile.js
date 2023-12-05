import "./Profile.css"
import { useAuth } from "../Contexts/AuthContext"
import axios from "axios"
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import SectionHeading from "../Components/SectionHeading/SectionHeading"

import ProfileBio from "../Components/ProfileBio/ProfileBio"

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [profileData, setProfileData] = useState()

   

    const navigate = useNavigate()
    const {userId} = useAuth()

    useEffect(() => {
        axios.post("http://localhost:8000/users/profile", {id: userId})
        .then((res) => {
            setProfileData(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.response?.data?.detail || err.message || "An Unknown errror occured")
            setIsLoading(false)
        })
    },[])



    if(isLoading){return <div>Loading...</div>}
    if(error){return <div>{error}</div>}

    return(
        <>
            {JSON.stringify(profileData)}
           <ProfileBio bio={profileData["bio"]} />
            
            <SectionHeading text="Art Categories" />
            {
            profileData["art_categories"].map((category) => {
                return <button>{category}</button>
            }) }
            <button>add new category</button>
            
            <SectionHeading text="Product Categories"/>
            {
                profileData["product_categories"].map((category) => {
                    return <button>{category}</button>
                })
            }
            <button>add new category</button>
        </>
    )
}

export default Profile