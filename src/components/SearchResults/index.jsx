import React from "react";
import ListGifs from "../ListGifs";
import {useGif} from "../../hooks/useGif";


const SearchResults = ({search}) =>  {
    
    const{loading, gifs} = useGif(search);


    return(
        <>
            {loading ? <h2 className="loading">Loading...</h2> : <ListGifs gifs={gifs} />}
        </>
    ) 
}

export default SearchResults;