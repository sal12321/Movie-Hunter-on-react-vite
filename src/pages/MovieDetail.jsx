import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assumes you use react-router for navigation
import  {useMovieContext}  from "../context/MovieContext";
import "../css/MovieDetail.css"; // Create a corresponding CSS file for styling
import {getMovieDetails} from "../services/api";


export default function MovieDetail() {
  const { id }  = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { favorites, addToFavorite, removeFavorite, isFavorite } = useMovieContext();

  // Fetch individual movie details (or pass it via route state/props)
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        // const response = await fetch(
        //   `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_TMDB_API_KEY`
        // );
        console.log("this is before setMovie")
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (!movie) return <div className="error">Movie not found.</div>;

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  };

  return (
    <div className="movie-detail-container">
      {/* Backdrop Banner */}
      <div 
        className="movie-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      <div className="movie-content-wrapper">
        {/* Poster Image */}
        <div className="movie-poster-section">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
          />
        </div>

        {/* Detailed Info */}
        <div className="movie-info-section">
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>

          <div className="metadata">
            <span>📅 {movie.release_date}</span>
            <span>⭐ {movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count} votes)</span>
            <span>⏱️ {movie.runtime} mins</span>
          </div>

          <div className="genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="genre-tag">{genre.name}</span>
            ))}
          </div>

          <h3>Overview</h3>
          <p className="overview">{movie.overview}</p>

          <button 
            className={`favorite-action-btn ${favorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          >
            {favorite ? "Remove from Favorites ♥" : "Add to Favorites ♡"}
          </button>
        </div>
      </div>
    </div>
  );
}