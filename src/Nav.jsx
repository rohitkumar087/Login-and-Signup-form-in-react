import { Link } from "react-router-dom"
import Home from "./Home"

export default function Nav(){
    return(
     <>
        <div className="navStyle" >
            <Link to='/' style={{color:"white"}}>Home</Link>
            <Link to='/login' style={{color:"white"}}>Log in</Link>
            <Link to='/signup' style={{color:"white"}}>Sign up</Link>
            <Link to='/fetch' style={{color:"white"}}>Fetch</Link>
        </div>
     </>
    )
}