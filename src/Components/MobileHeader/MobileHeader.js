import "./MobileHeader.css"
import Logo from "../Logo/Logo";
import OpenMenuButton from "../OpenMenuButton/OpenMenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";

import { useState } from "react";

const MobileHeader = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
        <header className="mobile-header">
            <OpenMenuButton 
                action={() => setIsMenuOpen(!isMenuOpen)} />
            <Logo/>
            {isMenuOpen && <MobileMenu/>}
        </header>
    )
}
export default MobileHeader;