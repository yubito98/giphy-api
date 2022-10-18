import { useState, useEffect } from "react";
import getGifs from "../services/getGif";

export function useGif(search){

    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
    setLoading(true)
      getGifs(search)
      .then(images =>{
        setGifs(images)
        setLoading(false);
    });
    },[search])

    return {loading, gifs};

}