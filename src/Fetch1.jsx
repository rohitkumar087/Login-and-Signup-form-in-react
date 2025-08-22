import { useEffect, useState } from "react";
import axios, { spread } from "axios";
import Nav from "./Nav";

export default function Fetch1(){
    const [data,setData]=useState([])
    const [dataCopy,setCopyData]=useState([])
    const [toggle,setToggle] =useState(true)
    const [search, setSearch] = useState('')
    const [sort, setsort] = useState('')
    const [category,setCategory] = useState('')

    const fetchData = async() => {
        const result =   await axios.get('https://fakestoreapi.com/products') 
        console.log(result)   
        setData(result.data)
        setCopyData(result.data)
    }

    const searchingAndSorting = data.filter((item )=> 
        (item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()))
        &&
        (category === '' || item.category === category)
    )
     .sort((a,b) =>{
            if(sort === 'asc'){
                return a.price-b.price
            }
            else if(sort === "dsc"){
                return b.price-a.price
            }
            else if(sort === 'a-z'){
                return a.title.localeCompare(b.title);
            }
            else if(sort === 'z-a'){
                return b.title.localeCompare(a.title);
            }
            else{
                return 0
            }
        })

        const resetData = () => {
            setData(dataCopy)
            setSearch('')
            setsort('')
            setCategory('')
        }

    const fetchToggle = async() =>{
        setToggle(!toggle)
        console.log(toggle)
    }

    useEffect(()=>{
        fetchData();
    },[]);
    // console.log(sort)
    // console.log(search)
    console.log(category)

    return(
        <>
        <Nav/>
        <h1>Access data through axios</h1>
        {/* <button onClick={fetchToggle}>Change</button> */}

        <input 
        type="text"
        placeholder="search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />

         <select value={sort} onChange={(e) => setsort(e.target.value)} style={{ padding:"12px",marginLeft:"20px", borderRadius:"5px"}}>
            <option value="">Sort</option>
            <option value="asc">Low to High</option>
            <option value="dsc">High to Low</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
         </select>

         <button onClick={() => setCategory("men's clothing")}>Men</button>
         <button onClick={() => setCategory("women's clothing")}>Women</button>
         <button onClick={() => setCategory("electronics")}>Electronics</button>
         <button onClick={() => setCategory("jewelery")}>Jewelery</button>
         <button onClick={resetData}>Reset</button>
        
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                    {searchingAndSorting.map((item) => (
                        <div key={item.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px", width:"350px" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100px" }} />
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                            <button>View Details</button>
                        </div>
                    ))}
                </div>
        </>
    )
}