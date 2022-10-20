import React, {useState, useEffect} from "react";
import ImageGif from "../ImageGif";
import getGifs from "../../services/getGif";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import "./ListRedirection.css";

const ListRedirection = () =>  {

    const params = useParams()


    const { keyword } = params;

    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
      getGifs(keyword).then(images => setGifs(images))
      
    },[keyword])
  
    return(
        <div className="ListRedirection">

            <a href="/giphy-api" className="btn btn-primary mb-4 ">Go Back</a>
            <div className="ListRedirection-container" >
                {
                    gifs.map(gif => <ImageGif key={gif.images.original.url} src={gif.images.original.url} href={`giphy-api/#/detail/${gif.id}`}/>)
                }
            </div>
        </div>
    )
}


export default ListRedirection;