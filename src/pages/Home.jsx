import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
  const handleSearch = (e) => {
            
    
    e.preventDefault();
    setSearchQuery("------")

    alert(searchQuery)
  };

  const [searchQuery, setSearchQuery] = useState("");

   


  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_date: "2024",
    },
    {
      id: 3,
      title: "World war 3",
      release_date: "2020",
    },
    {
      id: 2,
      title: "Terminator",
      release_date: "1994",
    },
  ];

  return (
    <>
      <div className="Home">
        <div className="search-form">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search for movies..."
              className="search-input"
              value = {searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className="search-button">Search</button>
          </form>
        </div>

        <div className="Movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
