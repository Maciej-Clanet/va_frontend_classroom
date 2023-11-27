import "./Home.css"
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import FeaturedArtistThumbnail from "../Components/FeaturedArtistThumbnail/FeaturedArtistThumbnail";
import tempArtistImage from "../Assets/Temp/FeaturedArtist.png"


import ProductCard from "../Components/ProductCard/ProductCard";
import ProductImage from "../Assets/Temp/ProductThumbnail.png";
import AvatarImage from "../Assets/Temp/Avatar.png"



const Home = () => {
    return (
        <>
            <FeaturedArtistThumbnail artistName="goober" artistProfession="hoe" profileLink="/user/goober" image={tempArtistImage} />
            <SectionHeading text="Trending this week" />
            <SectionHeading text="Popular on the Marketplace" active={true} />
            <ProductCard image={ProductImage} title="Test title" artist="goober" price={3.50} avatar={AvatarImage} productLink="/products/testproduct" />
        </>
    )
}

export default Home;