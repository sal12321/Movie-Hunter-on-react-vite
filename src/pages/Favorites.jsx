
import { useMovieContext } from '../context/MovieContext'
import '../css/Favorites.css'
import MovieCard from '../components/MovieCard';
export default function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites){
        return <>

        <div className='favorites'>
            <h2 >Your Favorites...</h2>
        </div>
       
            <div className="movies-grid">
                        {favorites?.map((movie) => (
                          <MovieCard movie={movie} key={movie.id} />
                        ))}
                      </div>
        
        </>
    }

    return(
    <>

    <div className="favorites-empty">
        <h2>No favorite Movies yet.</h2>
        <h3>Start adding... & they start appearing here.</h3>
    </div>

    </>
    )

}