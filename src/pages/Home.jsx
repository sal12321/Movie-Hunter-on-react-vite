import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

import "../css/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  let [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // call the function when there is any change in the second parameter(dependency array), if that is empty then that will be rendered once..

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log(popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load the movies...");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    

    if (!searchQuery.trim()) {
      return;
    }
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
    } catch (err) {
      console.log(err);
      setError("Some Error occurred ...");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  // when the state change occurs the entire component will be rerendered

  return (
    <>
      <div className="home">
        <form action="" onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {error && <div className="error-message">Some error occurred</div>}

        {loading ? (
          <div className="loading"> Loading... </div>
        ) : (
          <div className="movies-grid">
            {movies?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
              
            ))}
          </div>
         
          
        )}

         

      </div>
    </>
  );
}
