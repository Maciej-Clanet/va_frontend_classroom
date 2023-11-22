import "./Home.css"
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import ThemeToggleButton from "../Components/ThemeToggleButton/ThemeToggleButton";
import LogoutButton from "../Components/LogoutButton/LogoutButton";

import {useState, useEffect} from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {

    const [user, setUser] = useState()

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                //no user
                setUser("No User")
            }
        })

    }, [])


    return (
        <>
            <SectionHeading text="my heading"/>
            <SectionHeading text="This is a longer heading" active={true}/>
           <ThemeToggleButton/>
 
            Home page
            <h3>
            {JSON.stringify(user)}
            </h3>
            <LogoutButton/>
        </>
    )
}

export default Home;