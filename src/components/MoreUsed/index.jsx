import React from "react";
import "./MoreUsed.css"

const redirections = [
    {name:"Matrix", link:"/gifs/matrix"},
    {name:"Rick and Morty", link:"/gifs/rickandmorty"},
    {name:"Vikings", link:"/gifs/vikings"},
    {name:"Games", link:"/gifs/games"},
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