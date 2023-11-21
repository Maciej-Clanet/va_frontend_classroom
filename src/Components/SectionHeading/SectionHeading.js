import "./SectionHeading.css"

const SectionHeading = ({text, active = false}) =>{
    return(
        <div className="section-heading">
            {active && <div className="section-heading-active" />}
            <h2>{text}</h2>
            <div className="section-heading-line"/>
        </div>
    )
}
export default SectionHeading