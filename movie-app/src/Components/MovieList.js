import React from "react";

const movies = [
    {title: 'The Polar Express'},
    {title: 'The Grinch'},
    {title: 'Home Alone'},
    {title: 'The Night Before Christmas'},
    {title: 'Arthur Chritmas'},
];

function Movielist () {
return (
    <div>
        <ul>
            {movies.map((movie,index) =>{
                <li key ={index}>{movie.title}</li>
            })}
        </ul>
    </div>
)
}

export default Movielist;