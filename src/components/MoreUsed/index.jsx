import React from "react";
import "./MoreUsed.css"

const redirections = [
    {name:"Matrix", link:"/giphy-api/gifs/matrix"},
    {name:"Rick and Morty", link:"/giphy-api/gifs/rickandmorty"},
    {name:"Vikings", link:"/giphy-api/gifs/vikings"},
    {name:"Games", link:"/giphy-api/gifs/games"},
];


const MoreUsed = () =>{
    return(
        <div className="MoreUsed mb-4">
            <h2>More Used</h2>
            <div className="row">
                {redirections.map(redirection => (
                    <div key={redirection.name} className="col-12 col-md-3 mt-4" >
                        <a href={redirection.link} className="link">{redirection.name}</a>
                    </div>  
                ))}
            </div>
        </div>
    )
}


export default MoreUsed;