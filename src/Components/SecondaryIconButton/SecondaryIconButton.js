import "./SecondaryIconButton.css"

const SecondaryIconButton = ({text, icon, onClick}) => {
    return <button className="secondary-icon-button text-label" onClick={onClick}>{icon}{text}</button>
}

export default SecondaryIconButton;