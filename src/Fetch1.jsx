import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

export default function Fetch1(){
    const [data,setData]=useState('')
    const [toggle,setToggle] =useState(true)


    const fetchData = async() => {
        const result =   await axios.get('https://fakestoreapi.com/products') 
        console.log(result)   
        setData(result.data)
    }

    const fetchToggle = async() =>{
        setToggle(!toggle)
        console.log(toggle)
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <>
        <Nav/>
        <h1>Access data through axios</h1>
        {/* <button onClick={fetchToggle}>Change</button> */}
        {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
        </>
    )
}