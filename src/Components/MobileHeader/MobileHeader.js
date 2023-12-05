import "./MobileHeader.css"
import Logo from "../Logo/Logo";
import OpenMenuButton from "../OpenMenuButton/OpenMenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import PrimaryIconButton from "../PrimaryIconButton/PrimaryIconButton";
import ProfileButton from "../ProfileButton/ProfileButton";

import { ReactComponent as UserIcon } from "../../Assets/Icons/UserIcon.svg"


import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../../Contexts/AuthContext";

const MobileHeader = () => {
    const navigate = useNavigate()
    const {username} = useAuth()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="mobile-header">
            <OpenMenuButton
                action={() => setIsMenuOpen(!isMenuOpen)} />
            <Logo />
            {!username && <PrimaryIconButton text="Sign In" icon={<UserIcon/>} onClick={() => navigate("/Login")} /> }
            {username && <ProfileButton/>}
            {isMenuOpen && <MobileMenu />}
        </header>
    )
}
export default MobileHeader;