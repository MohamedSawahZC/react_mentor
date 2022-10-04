import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap';

 const UseEffectExample = () => {
    const [count,setCount]=useState(0);
    useEffect((
    )=>{
        console.log('UseEfferct')

    },[count])

    const increase=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <Button variant='primary' onClick={increase} >Increase +</Button>
    </div>
  )
}

export default UseEffectExample;
