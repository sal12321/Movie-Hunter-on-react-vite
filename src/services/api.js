const API_KEY = "97f0be23e7b42f21aa412538cf87d670";
const API_URL = "https://api.themoviedb.org/3" ;
const ACCESS_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2YwYmUyM2U3YjQyZjIxYWE0MTI1MzhjZjg3ZDY3MCIsIm5iZiI6MTc4NjE3OTcwNy4wMiwic3ViIjoiNmE3NmYwN2JmOWNlOGJiM2EyY2ZjNmIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._KqFQT8ZvsELtwB3QFlv-cBbq8UjJLM0dIm0fPmwxqA";


export const getPopularMovies = async () => {

    try {
        console.log("Token being sent:", ACCESS_TOKEN); // Check if this prints your actual token or 'undefined'
          const response = await fetch(`${API_URL}/movie/popular`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  });

  const data = await response.json();
  console.log(data);
  return data.result;
         
    } 
    catch(err){console.log(err)}



}

export const searchMovies  = async (query) =>{

    try {
    const response = await fetch(`${API_URL}/search/movie/?api_key=${API_KEY}
        &query=${encodeURIComponent(query)}`);
    

    const data = await response.json();
    console.log(data.results);
    return data.results;

    }
     catch(err){console.log(err)}

} 

    