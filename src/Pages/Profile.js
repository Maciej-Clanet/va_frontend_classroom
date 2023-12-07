import "./Profile.css"

import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../Contexts/AuthContext"
import SectionHeading from "../Components/SectionHeading/SectionHeading"
import ProfileInfoField from "../Components/ProfileInfoField/ProfileInfoField"

const Profile = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [profileData, setProfileData] = useState()

    const { userId, username } = useAuth()

    useEffect(() => {
        axios.post("http://localhost:8000/users/profile", { "user_id": userId })
            .then((res) => {
                setProfileData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.response?.data?.detail || err.message || "An Unknown error occured")
                setIsLoading(false)
            })
        //make a post axios call to http://localhost:8000/users/profile, send it an OBJECT with a "user_id"
        //HINT, look at the /docs for backend, when you "try out the endpoint" the data you are sending needs to look exactly how it looks there

    }, [])


    if (isLoading) { return <div>Loading...</div> }
    if (error) { return <div>{error}</div> }

    return (
        <>
            {JSON.stringify(profileData)}
            <SectionHeading text="Details" />
            <ProfileInfoField 
                fieldName="profession" 
                fieldData={profileData["profession"]}
                />
            <ProfileInfoField 
                fieldName="bio" 
                fieldData={profileData["bio"]}
                type="big"
                />

            {/* In here we will display the user profession (and ability to change it)
            We will also display the user bio (and ability to change it) */}

            <SectionHeading text="You art" />
            {/* In this section we will display a list of categories from the user profile
            These categories will be a toggable button
            The currently toggled categories will form a list of selected categories
            This list will eventually be send to an endpoint so we can get only the artworks from selected categories
            the artwork we get back from the endpoint will eventually display as thumbnails 
            
            We are also going to give an option to add a new category or delete an existing one.
            We are also going to give an option to add new artworks (will be able to select category later) 
            
            */}

            <SectionHeading text="Your Products" />
            {/* This will work exactly the same way as your art section, except for products  */}





            {/* 
                IGNORE THIS FOR NOW ITS JUST A LIST OF FEATURES PROFILE WILL EVENTUALLY NEED
                Profile needs handful of features
                1. See current bio, add one if one doesn't already exist, change the existing one if it does exist.
                2. Change "profession" of the user
                3. See categories of art the user has
                4. Add a new category, remove categories (with exception of the default "all")
                5. Add product categories, remove product categories (came exeption)
                6. Ability to click on a category to see artwork/products from it
                7. Ability to add a new art/product to a category
                8. Ability to remove art
                9. Ability to change metadata of an artwork / product

                Take these features one by one, most of them will be in their own component.
                Try to think how you could approach creating these. This will involve both the frontend and backend. 
            */}
        </>
    )
}

export default Profile