import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Learn from "./Pages/Learn.js";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Learn" element={<Learn/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
        </Routes>
    )
}

export default AllRoutes;