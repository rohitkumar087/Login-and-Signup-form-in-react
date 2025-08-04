import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Nav from "./Nav"

export default function Fetch(){
    const [data,setData] = useState("")
    const [toggle,setToggle] = useState(true)

    const navigate = useNavigate()
const fetchData = () =>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(result => setData(result))
    console.log(data)
}
const fetchToggle = () =>{
    setToggle(!toggle)
    if(toggle){
        navigate('/')
    }
    else{
        navigate('/fetch')
    }
}

useEffect(()=>{
    fetchData()
},[toggle])

    return(
        <>
        <Nav/>
        <h1>Fetch data</h1>
        <button onClick={fetchToggle}>Change</button>
        </>
    )
}