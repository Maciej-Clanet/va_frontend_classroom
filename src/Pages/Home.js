import "./Home.css"
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import ThemeToggleButton from "../Components/ThemeToggleButton/ThemeToggleButton";
import FeaturedArtistThumbnail from "../Components/FeaturedArtistThumbnail/FeaturedArtistThumbnail";
import tempArtistImage from "../Assets/Temp/FeaturedArtist.png"

const Home = () => {
    return (
        <>
            <FeaturedArtistThumbnail artistName="goober" artistProfession="hoe" profileLink="/user/goober" image={tempArtistImage}/>
            <SectionHeading text="my heading"/>
            <SectionHeading text="This is a longer heading" active={true}/>


            

        </>
    )
}

export default Home;