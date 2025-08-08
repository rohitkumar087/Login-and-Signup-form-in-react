import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Nav from "./Nav"

export default function Fetch() {
    const [data, setData] = useState([])
    const [toggle, setToggle] = useState(true)
    const [loading, setLoading] = useState(true)



    const navigate = useNavigate()
    const fetchData = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => setData(result))
        console.log(data)
        setLoading(false)
    }
    const fetchToggle = () => {
        setToggle(!toggle)
        if (toggle) {
            navigate('/')
        }
        else {
            navigate('/fetch')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Nav />
            <h1>Fetch data</h1>
            {/* <button onClick={fetchToggle}>Change</button> */}

            {loading ? (<h2>Loading....</h2>) :
                (<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                    {data.map((item) => (
                        <div key={item.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px", width:"350px" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100px" }} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                        </div>
                    ))}
                </div>
                )}

        </>
    )
}