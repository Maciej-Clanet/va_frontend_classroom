import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.js";
import Learn from "./Pages/Learn.js";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import Profile from "./Pages/Profile.js";

import { useAuth } from "./Contexts/AuthContext.js";

const AllRoutes = () => {

    const {userId} = useAuth()

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Learn" element={<Learn/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Profile" element={userId ? <Profile/> : <Navigate to="/login"/>} />
        </Routes>
    )
}

export default AllRoutes;