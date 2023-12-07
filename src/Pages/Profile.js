import "./Profile.css"

import {useEffect, useState} from "react"
import axios from "axios"
import {useAuth} from "../Contexts/AuthContext"


const Profile = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [profileData, setProfileData] = useState()

    const {userId, username} = useAuth()

    useEffect(() => {

        //make a post axios call to http://localhost:8000/users/profile, send it an OBJECT with a "user_id"
        //HINT, look at the /docs for backend, when you "try out the endpoint" the data you are sending needs to look exactly how it looks there

    },[])

    if(isLoading){return <div>Loading...</div>}
    if(error){return <div>{error}</div>}
    
    return(
        <>
            Profile Test
            {/* 
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