import React from "react";
import "./ImageGif.css"


const ImageGif = ({src, href}) =>  {
    return(
        <a href={href} className="ImageGif" >
            <img loading="lazy" src={src} />
        </a>
        
        
    )
}


export default ImageGif;