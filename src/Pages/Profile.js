import "./Profile.css"
import { useAuth } from "../Contexts/AuthContext"
import axios from "axios"
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import SectionHeading from "../Components/SectionHeading/SectionHeading"
import TagButton from "../Components/TagButton/TagButton"
import ProfileInfoField from "../Components/ProfileInfoField/ProfileInfoField"

import TagList from "../Components/TagList/TagList"

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


    function getArtworksByTags(tags){
        alert("we will do axios call here to get all artworks that match currently selected tags, current Tags are: " + tags.join(",") )
    }

    function getProductsByTags(tags){
        alert("get products by tags: " + tags.join(","))
    }

    if(isLoading){return <div>Loading...</div>}
    if(error){return <div>{error}</div>}

    return(
        <>
            {/* {JSON.stringify(profileData)} */}
            <SectionHeading text="Details" />
            <ProfileInfoField fieldName="profession" fieldData={profileData["profession"]}/>
            <ProfileInfoField fieldName="bio" fieldData={profileData["bio"]} type="big"/>
            
            <SectionHeading text="Art Categories" />
            <TagList tags={profileData["art_categories"]} callback={(tags) => getArtworksByTags(tags)} />
     
            <button>add new category</button>
            
            <SectionHeading text="Product Categories"/>
            <TagList tags={profileData["product_categories"]} callback={(tags) => getProductsByTags(tags)} />
     
            <button>add new category</button>
        </>
    )
}

export default Profile