import Nav from "./Nav";
import UseCounter from "./UseCounter";

export default function ProductDetail(){

    const {count,increment,decrement,reset} = UseCounter(20)
    return(
        <>
        <Nav />
        <h1>This is product page</h1>
        <h1>Count : {count}</h1>
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
        <button onClick={reset}>Reset</button>
        </>
    )

}