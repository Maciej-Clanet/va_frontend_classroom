import "./Home.css"
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import ThemeToggleButton from "../Components/ThemeToggleButton/ThemeToggleButton";
const Home = () => {
    return (
        <>
            <SectionHeading text="my heading"/>
            <SectionHeading text="This is a longer heading" active={true}/>
           <ThemeToggleButton/>
 
            Home page
        </>
    )
}

export default Home;