import { useState,useEffect } from "react";

function Counter(){
    const [count, setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1);
    }
    useEffect(()=>{
        console.log('Count has been Updated')
    },[count]);
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={increment}>Increase</button>  
        <button onClick={decrement}>Decrease</button>  
        </>
    )
}
export default Counter;