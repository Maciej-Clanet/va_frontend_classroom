import "./Profile.css"

import {useEffect, useState} from "react"
import axios from "axios"


const Profile = () => {
    //create boolean value to keep track if the profile is loading
    //create value to keep track of any error
    //create a state value to keep the profile data in

    //get the user id from auth context so we can load the right profile

    useEffect(() => {

    },[])

    //if page is loading make display some sort of loading message
    //if there is an error display the error message


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