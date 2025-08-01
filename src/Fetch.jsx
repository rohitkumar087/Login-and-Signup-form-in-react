import axios from "axios"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import { data } from "react-router-dom"

export default function Fetch(){

const [data,setData]=useState('')
const [toggle,setToggle]=useState(true)

const fetchData = async() =>{
const result = await axios.get('https://fakestoreapi.com/products')
console.log(result.data)
setData(result.data)
}

const fetchToggle = async() => {
    setToggle(toggle)
}

useEffect(()=>{
    fetchData()
},[toggle])

console.log(toggle)

    return(
        <>
        <Nav/>
        <button onClick={fetchToggle}>Change</button>
        <h1>Fetch</h1>
        </>
    )
}