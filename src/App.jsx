

// import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import {Route, Routes} from "react-router-dom"
import Favorites from "./pages/Favorites"
import { MovieProvider } from './context/MovieContext'
import "./css/App.css"

import Navbar from './components/Navbar'

// a component is a function that just returns a jsx code, one container only... if we have to return multiple container then we need to wrap them into a single container
export default function App() {




  return (  
    <>
<MovieProvider>
  <Navbar />
  
    <main className="main-content">
      <Routes>
        <Route path = "/" element = {<Home /> } />
        <Route path = "/Favorites" element = {<Favorites /> } />
        <Route path = "/movieDetail/:id" element = {<MovieDetail /> } />
      </Routes>
    </main>


</MovieProvider>

  


    </> 
  )



// need to define in capital letters
// function Text({text, color}){
//   return  (
//     <>
//     <div style = {{color : color}}>{text}</div>
//     </>
//   );
// }


}
