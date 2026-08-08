import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from "../services/api";

import "../css/Home.css"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    let [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // call the function when there is any change in the second parameter(dependency array), if that is empty then that will be rendered once..
    useEffect( () =>{
      const loadPopularMovies = async () =>{
        try {
          const popularMovies = await getPopularMovies();
          console.log(popularMovies);
          setMovies(popularMovies);
        } 
        catch(err){
          setError("Failed to load the movies...");
          console.log(err);
        }
        finally{
          setLoading(false);
        }
      }
      loadPopularMovies();
    }, [])

  const handleSearch = (e) => {
            
    
    e.preventDefault();

  };

// when the state change occurs the entire component will be rerendered


getPopularMovies();

  // movies = [
  //   {
  //     id: 1,
  //     title: "John Wick",
  //     release_date: "2024",
  //   },
  //   {
  //     id: 3,
  //     title: "World war 3",
  //     release_date: "2020",
  //   },
  //   {
  //     id: 2,
  //     title: "Terminator",
  //     release_date: "1994",
  //   },
  // ];

  return (
    <>
      <div className="home">
      
          <form action="" onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="search for movies..."
              className="search-input"
              value = {searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className="search-button">Search</button>
          </form>
        

        <div className="movies-grid">

          { movies.map((movie) => (

          <MovieCard movie={movie} key={movie.id} />
          
          ))}
        </div>
      </div>
    </>
  );
}
