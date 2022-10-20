import React from "react";
import "./ImageGif.css"


const ImageGif = ({src, href}) =>  {
    return(
        <a href={href} className="ImageGif" >
            <img src={src} />
        </a>
        
        
    )
}


export default ImageGif;