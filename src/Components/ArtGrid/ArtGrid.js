import "./ArtGrid.css"
import ArtworkThumbnail from "../ArtworkThumbnail/ArtworkThumbnail"
import tempArtworkThumbnail from "../../Assets/Temp/ArtworkThumb.png"
import {useEffect, useState} from "react"

const ArtGrid = ({rows}) => {
    const [thumbnails, setThumbnails] = useState([])

    function getMaxPerRow(){
        const cardWidth = 211;
        const gap = 8;
        const padding = 16;

        const totalWidth = window.innerWidth;

        const maxItems = Math.floor(   totalWidth / ( cardWidth + gap + padding ) )
        return maxItems;

    }
    function updateThumbnails(){
        const maxPerRow = getMaxPerRow()
        const newThumbnailsGrid = []

        for(let i = 0; i < rows; i++){
            const rowThumbnails = []
            for(let j = 0; j < maxPerRow; j++){
                rowThumbnails.push(
                    <ArtworkThumbnail 
                        key={`${i}-${j}`}
                        image={tempArtworkThumbnail}
                        artist="goober"
                        title="test"
                        imageLink="/art/test"
                    /> 
                )
            }
            newThumbnailsGrid.push(rowThumbnails)
        }
        setThumbnails(newThumbnailsGrid);
    }
    useEffect(() => {
        updateThumbnails();

        const handleResize = () =>{
            updateThumbnails();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    },[])

    return(
        <div className="art-grid">
            {
                thumbnails.map((row, i) => (          
                    <div key={`row-${i}`} className="art-grid-row">
                        {row}    
                    </div> 
                ))
            }
        </div>
    )
}

export default ArtGrid