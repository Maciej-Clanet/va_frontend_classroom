import "./PrimaryButton.css"

const PrimaryButton = ({text, icon, action}) =>{
    
    return <button className="primary-button" onClick={action}>{icon}<span className="text-label prominent">{text}</span></button>
}

export default PrimaryButton;