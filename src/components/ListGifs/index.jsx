import React from "react";
import ImageGif from "../ImageGif";
import "./ListGifs.css"


const ListGifs = ({gifs}) =>  {
    
    
    return(
        <div className="ListGifs">
            {gifs.map(gif =>(
                <ImageGif 
                key={gif.images.original.url} 
                src={gif.images.original.url} 
                href={`/giphy-api/detail/${gif.id}`}/>
            ))}
        </div>

    )

}

export default ListGifs;