import {Link} from "react-router-dom";
import "../css/Navbar.css"


export default function Navbar({setSearchQuery}){
let onHomeClick = () => {
    setSearchQuery("");
}
    return (
        <>
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/" >Movie App</Link>
            </div>
            <div className="navbar-link">
                    <Link to= "/" className="nav-link" onClick={onHomeClick} > Home </Link>
                    <Link to= "/favorites" className="nav-link"> Favorites </Link>
                    <Link to= "/" className="nav-link"> Login </Link>
            </div>
        </div>
        </>
    )
}