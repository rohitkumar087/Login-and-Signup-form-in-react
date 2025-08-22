import { Link } from "react-router-dom"
import Home from "./Home"

export default function Nav(){
    return(
     <>
        <div className="navStyle" >
            <Link to='/' style={{color:"white"}}>Home</Link>
            <Link to='/login' style={{color:"white"}}>Log in</Link>
            <Link to='/signup' style={{color:"white"}}>Sign up</Link>
            <Link to='/fetch' style={{color:"white"}}>Axios</Link>
            <Link to='/axios' style={{color:"white"}}>Fetch</Link>
            <Link to='/product' style={{color:"white"}}>Product</Link>
        </div>
     </>
    )
}


// import axios from "axios"
// import { useEffect, useState } from "react"
// import Nav from "./Nav"
// import { data } from "react-router-dom"

// export default function Fetch() {

//     const [data, setData] = useState('')
//     const [toggle, setToggle] = useState(true)

//     const fetchData = async () => {
//         const result = await axios.get('https://fakestoreapi.com/products')
//         console.log(result);
//         setData(result.data)
//         console.log(data)
//     }

//     const fetchToggle = () => {
//         setToggle(!toggle)
//     }

//     useEffect(() => {
//         fetchData()
//     }, [toggle])

//     // console.log(toggle)

//     return (
//         <>
//             <Nav />
//             <button onClick={fetchToggle}>Change</button>
//             <h1>Fetch</h1>
//             {data && data.map((item) =>{
//                 return <p key={item.id}>{item.title}</p>
//             })}
//         </>
//     )
// }