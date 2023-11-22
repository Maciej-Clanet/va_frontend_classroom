import "./PrimaryButton.css"

const PrimaryButton = ({text, icon, action}) =>{
    
    return <button className="primary-button" onClick={action}>{icon}<span>{text}</span></button>
}

export default PrimaryButton;