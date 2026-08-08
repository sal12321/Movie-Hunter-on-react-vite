import "../css/MovieCard.css"
export default function MovieCard({movie}){

    function onFavClick(){
        alert("clicked");
    }

    return (
<>

<div className="movie-card">

    <div className="movie-poster">

    <img src={`https://image.tmdb.org/t/p/w700${movie.poster_path}`} alt={"altImg"} />
    <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavClick} >  
            ❤️
        </button>
    </div>

        </div>  

        <div className="movie-info">

            <h3>{movie.title}</h3>

            <p>{movie.release_date?.split("-")[0]}</p> 

            </div>        
</div>



</>
    );
}