import { Link } from "react-router-dom"
import Home from "./Home"

export default function Nav(){
    return(
     <>
        <div className="navStyle">
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
        </div>
     </>
    )
}