// state manager for our favorite movies
import { useEffect, useState, useContext, createContext } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext)


export const MovieProvider  = ({children}) => {

    const [favorites, setFavorites] =  useState([]);

    useEffect(() =>{
        const storedFavorites =  localStorage.getItem("favorites");

        if(storedFavorites){
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);


    const addToFavorite  = (movie) =>{

        setFavorites((prev) => {

    if(prev.some((m) => m.id === movie.id)){
        return prev;
    }
    else {
        return [...prev, movie];
    }
                    
       
        
        });
    };

    const removeFavorite = (movieId) =>{

        
        setFavorites(prev => prev.filter(movie => movie.id !== movieId ));
    }


    const isFavorite = (movieId) => {
         return favorites.some((movie) => movie.id === movieId);
        // returns either true or false;

    }

    const value = {
        favorites,
        addToFavorite,
        removeFavorite,
        isFavorite
    }

    return (
        <MovieContext.Provider value = {value}>
            {/* now children can use values which are inside of {value} */}
            {children}
            
        </ MovieContext.Provider>
    )
}