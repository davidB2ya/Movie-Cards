import React from 'react';
import movies from '../../movies.json';
import MovieCard from '../MovieCard/MovieCard';
import style from './GridMovies.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function GridMovies (){
    
    const [movieList, setMovieList] = useState(movies)
    console.log(movieList)


    const click = () => { 
        // console.log(movies) 
        let result = movies.filter(gen => gen.genre_ids.includes(28)) 
        console.log (result) 
        setMovieList(result) 
    }
    
    // useEffect(()=> {
    //     click();
    //     console.log("Hola")
    // }, [movieList])


    return(
        <div className={style.card}>

            <div>
                <button className={style.button} onClick={click}>Filter Movies</button>
            </div>
            {movieList.map(movie => (
               <MovieCard movie={movie.title} img={movie.poster_path} text={movie.overview} gen={movie.genre_ids} key={movie.id}/>
               ))}

        </div>
    )
}
