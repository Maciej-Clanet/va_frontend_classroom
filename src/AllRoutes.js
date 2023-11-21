import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Learn from "./Pages/Learn.js";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Learn" element={<Learn/>}/>
        </Routes>
    )
}

export default AllRoutes;