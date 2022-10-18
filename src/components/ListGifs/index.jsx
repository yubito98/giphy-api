import React from "react";
import ImageGif from "../ImageGif";
import "./ListGifs.css"


const ListGifs = ({gifs}) =>  {
    

    return(
        <div className="row">
            {gifs.map(gif => <ImageGif key={gif} src={gif} />)}
        </div>

    )

}

export default ListGifs;