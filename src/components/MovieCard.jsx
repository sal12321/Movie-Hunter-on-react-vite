import { createContext } from "react";
import { useMovieContext } from "../context/MovieContext";
import "../css/MovieCard.css"
import { Link } from "react-router-dom";

export default function MovieCard({movie}){
 
    const {favorites, isFavorite, addToFavorite, removeFavorite} = useMovieContext() ;

    const favorite = isFavorite(movie.id)

    function onFavClick(e){
        // alert("clicked");

        e.preventDefault();

        if(favorite) removeFavorite(movie.id);
        else { addToFavorite(movie) };



    }

    return (
<>

<div className="movie-card">

    <div className="movie-poster">

    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={"altImg"} />
    <div className="movie-overlay">
        <button 
        className={`favorite-btn ${favorite ? "active" : ""}`} 
        onClick={onFavClick} >  
            ❤️
        </button>
    </div>

        </div>  

        <div className="movie-info">

            <h3>{movie.title}</h3>

            <p>{movie.release_date?.split("-")[0]}  
                <Link to= {`/movieDetail/${movie.id}`} className="movie-detail"> Know More </Link> 
 </p> 
            
            </div>   
                 
</div>



</>
    );
}