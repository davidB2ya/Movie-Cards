import React from "react";
import style from './MovieCard.module.css'

function MovieCard(props) {
    
    const imageUrl = `https://image.tmdb.org/t/p/w300${props.img}`
    console.log(props)
    return(
        <div className={style.card}>
            <img className={style.img} src={imageUrl} alt='imagen'/>
            <div className={style.content}>
                <h1>{props.movie}</h1>
                <p>{props.text}</p>
                {/* <h2>Geners in the movie</h2> */}
                {/* <p>{props.gen.map((gener)=> `[${gener}]` )}</p> */}
            </div>
        </div>
    )
}

export default MovieCard