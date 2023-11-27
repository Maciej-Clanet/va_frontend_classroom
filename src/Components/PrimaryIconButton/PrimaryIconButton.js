import "./PrimaryIconButton.css"

const PrimaryIconButton = ({text, icon, onClick}) =>{
    return <button className="primary-icon-button text-label prominent" onClick={onClick}>{icon}{text}</button>
}

export default PrimaryIconButton