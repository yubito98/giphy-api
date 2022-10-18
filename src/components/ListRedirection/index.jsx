import React, {useState, useEffect} from "react";
import ImageGif from "../ImageGif";
import getGifs from "../../services/getGif";
import { Link } from "wouter";

const ListRedirection = ({params}) =>  {

    const { keyword } = params;

    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
      getGifs(keyword).then(images => setGifs(images))
      
    },[keyword])
  
    return(
        <div className="row">
            <Link to="/"><a className="btn btn-primary mb-4 ">Go Back</a></Link>
            {
                gifs.map(gif => <ImageGif key={gif} src={gif} />)
            }
        </div>
    )
}


export default ListRedirection;