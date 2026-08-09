
const API_KEY = "97f0be23e7b42f21aa412538cf87d670";
const API_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2YwYmUyM2U3YjQyZjIxYWE0MTI1MzhjZjg3ZDY3MCIsIm5iZiI6MTc4NjE3OTcwNy4wMiwic3ViIjoiNmE3NmYwN2JmOWNlOGJiM2EyY2ZjNmIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._KqFQT8ZvsELtwB3QFlv-cBbq8UjJLM0dIm0fPmwxqA";



export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/popular`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log("Error fetching popular movies:", err);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search/movie?query=${encodeURIComponent(query)}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log("Error searching movies:", err);
  }
};


export const getMovieDetails = async(id) =>{
  try {
    const response = await fetch(
      `${API_URL}/movie/${id}?api_key=${API_KEY}`,{

      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    const data = await response.json();
    console.log("fetched the movie detail : " );
    console.log(data);
    return data;
} catch(err) {
  console.log("error in getMovieDetail : " + err);
}

}