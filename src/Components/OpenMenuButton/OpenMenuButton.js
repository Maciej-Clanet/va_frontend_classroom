import "./OpenMenuButton.css"
import {ReactComponent as MenuIcon} from "../../Assets/Icons/MenuIcon.svg"

const OpenMenuButton = ({action}) => {
    return(
        <MenuIcon 
            onClick={action}
            className="open-menu-button"
            />
    )
}
export default OpenMenuButton;