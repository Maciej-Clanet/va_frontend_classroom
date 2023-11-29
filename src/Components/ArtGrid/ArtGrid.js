import "./ArtGrid.css"
import ArtworkThumbnail from "../ArtworkThumbnail/ArtworkThumbnail"
import tempArtworkThumbnail from "../../Assets/Temp/ArtworkThumb.png"

import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const ArtGrid = ({ rows, type = "new" }) => {
    const [thumbnailsData, setThumbnailsData] = useState([])
    const [thumbnails, setThumbnails] = useState([]);

    function getMaxPerRow() {
        const cardWidth = 211;
        const gapSize = 8;
        const padding = 16;

        const totalWidth = window.innerWidth;
        let maxItems = Math.floor(totalWidth / (cardWidth + gapSize + padding))

        return maxItems
    }

    function updateThumbnails(data) {
        console.log("received data: ", data)
        const maxPerRow = getMaxPerRow()
        const newThumbnailsGrid = []
        let thumbIndex = 0

        for (let i = 0; i < rows; i++) {
            const rowThumbnails = []
            for (let j = 0; j < maxPerRow; j++) {
                const thumbnail = data[thumbIndex]
                if(thumbnail){
                    rowThumbnails.push(
                        <ArtworkThumbnail key={`${i}-${j}`} image={tempArtworkThumbnail} artist="goober" title={thumbnail["title"]} imageLink="/test/image" />
                    )
                }else{
                    rowThumbnails.push(<ArtworkThumbnail key={`${i}-${j}`} image={tempArtworkThumbnail} artist="goober" title="default" imageLink="/test/image" />)
                }

                thumbIndex++;
            }
            newThumbnailsGrid.push(rowThumbnails)
        }
        setThumbnails(newThumbnailsGrid)
    }


    useEffect(() => {


        function getData(){
            if(type == "new"){
                console.log("fetching new")
                axios.post("http://localhost:8000/art/newest", { amount: rows * getMaxPerRow() } )
                .then(res => {
                    console.log(res.data)
                    setThumbnailsData(res.data);
                    updateThumbnails(res.data);
                })
                .catch(error => {
                    console.error("error fetching thumbnails: ", error)
                })
            }
        }
        
        getData()
        // updateThumbnails()

        const handleResize = () => {
  
                getData()
            
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("rezise", handleResize);
        }

    }, [thumbnailsData])

    return (
        <div className="art-grid">
            {thumbnails.map((row, i) => (
                <div key={`row${i}`} className="art-grid-row">
                    {row}
                </div>
            ))}
        </div>
    )
}

export default ArtGrid;



// function getThumbnailsData(){
//     axios.post("http://localhost/art/newest", getMaxPerRow * rows)
//     .then((res) => {
//         alert(res)
//         setThumbnailsData(res)
//     })
//     .catch((err) => {
//         alert(err)
//     })
// }