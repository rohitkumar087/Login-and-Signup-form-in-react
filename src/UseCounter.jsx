import { useState } from "react";

export default function UseCounter(initialvalue = 0){
    const [count,setCount]=useState(initialvalue)

    const increment= () => {
        setCount(count+2)
    }

    const decrement= () => {
        setCount(count-2)
    }

    const reset= () => {
        setCount(initialvalue)
    }

    return{
        count,increment,decrement,reset
    }
}