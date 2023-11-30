import "./Profile.css"
import { useAuth } from "../Contexts/AuthContext"
import axios from "axios"
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import SectionHeading from "../Components/SectionHeading/SectionHeading"

import UpdateBioForm from "../Forms/UpdateBioForm/UpdateBioForm"

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [profileData, setProfileData] = useState()

    const [updatingBio, setUpdatingBio] = useState(false)

    const navigate = useNavigate()
    const {userId} = useAuth()

    useEffect(() => {
        axios.post("http://localhost:8000/users/profile", {id: userId})
        .then((res) => {
            setProfileData(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setIsLoading(false)
        })
    },[])



    if(isLoading){return <div>Loading...</div>}
    if(error){return <div>{error}</div>}

    return(
        <>
            {JSON.stringify(profileData)}
            <SectionHeading text="Bio"/>
            
            {!profileData["bio"] && <div>You don't have a bio. <button>Create One</button></div>}
            {profileData["bio"] && profileData["bio"]}
            {profileData["bio"] && <button onClick={() => setUpdatingBio(!updatingBio)} >update bio</button>}

            {updatingBio && <UpdateBioForm/>}

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