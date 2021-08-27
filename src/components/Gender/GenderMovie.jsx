import React from "react";


function GenderMovie(props) {
    // const gender = ``;
    let list = []
    return(
        <div>
           {list.map(gen => (
               <GenderMovie gen={gen.genre_ids} key={gen.id}/>
               ))} 
        </div>
    )
}

export default GenderMovie