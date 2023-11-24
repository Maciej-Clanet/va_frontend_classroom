import "./Home.css"
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import ThemeToggleButton from "../Components/ThemeToggleButton/ThemeToggleButton";
import FeaturedArtist from "../Components/FeaturedArtist/FeaturedArtist";
import ArtistImage from "../Assets/Temp/artistThumbnail.png";

const Home = () => {
    return (
        <>
            <SectionHeading text="my heading"/>
            <SectionHeading text="This is a longer heading" active={true}/>
           <ThemeToggleButton/>
           <FeaturedArtist
            name="goober"
            profession="unemployed"
            image={ArtistImage}
            profileLink="/artist/goober"
            />

            Home page
        </>
    )
}

export default Home;